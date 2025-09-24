import React, { useMemo, useState } from "react";

export type PersonNode = {
  id: string | number;
  name?: string;
  title?: string;
  img?: string;
  children?: PersonNode[];
  pid?: number
};

type LayoutNode = {
  id: string | number;
  name?: string;
  title?: string;
  img?: string;
  children?: LayoutNode[];
  parent?: LayoutNode | null;
  depth: number;
  size: number;
  startAngle?: number;
  endAngle?: number;
};

type Props = {
  data: PersonNode[];
  width?: number;
  height?: number;
  layerThickness?: number;
  innerRadius?: number;
  minAngle?: number;
  onSelect?: (node: PersonNode) => void;
};

const TAU = Math.PI * 2;

function polarToCartesian(cx: number, cy: number, radius: number, angle: number) {
  return {
    x: cx + radius * Math.cos(angle - Math.PI / 2),
    y: cy + radius * Math.sin(angle - Math.PI / 2),
  };
}

function arcPath(cx: number, cy: number, innerR: number, outerR: number, startAngle: number, endAngle: number) {
  const a0 = startAngle;
  const a1 = endAngle;
  const p0 = polarToCartesian(cx, cy, outerR, a0);
  const p1 = polarToCartesian(cx, cy, outerR, a1);
  const p2 = polarToCartesian(cx, cy, innerR, a1);
  const p3 = polarToCartesian(cx, cy, innerR, a0);

  const largeArcFlag = a1 - a0 <= Math.PI ? "0" : "1";

  return `M ${p0.x} ${p0.y} ` +
         `A ${outerR} ${outerR} 0 ${largeArcFlag} 1 ${p1.x} ${p1.y} ` +
         `L ${p2.x} ${p2.y} ` +
         `A ${innerR} ${innerR} 0 ${largeArcFlag} 0 ${p3.x} ${p3.y} ` +
         `Z`;
}

function buildTreeFromArray(data: PersonNode[]): PersonNode | null {
  const map = new Map<number | string, PersonNode & { children: PersonNode[] }>();
  data.forEach(item => map.set(item.id, { ...item, children: [] }));

  let root: PersonNode | null = null;
  data.forEach(item => {
    if (item.pid != null) {
      const parent = map.get(item.pid);
      if (parent) parent.children.push(map.get(item.id)!);
    } else {
      root = map.get(item.id)!;
    }
  });
  return root;
}

export default function RadialGenealogy({ data, width = 800, height = 800, layerThickness = 70, innerRadius = 40, minAngle = 0.02, onSelect }: Props) {
  const rootNode = useMemo(() => buildTreeFromArray(data), [data]);

  let maxDepth = 0;

  const layoutRoot = useMemo(() => {
    if (!rootNode) return null;
    const makeLayout = (node: PersonNode, parent: LayoutNode | null = null, depth = 0): LayoutNode => {
        let children: PersonNode[] = node.children || [];
        if (depth > maxDepth) maxDepth = depth
      
        if (depth < maxDepth) {
            const MIN_CHILDREN = 2;
            while (children.length < MIN_CHILDREN) {
              children.push({ id: `${node.id}-empty-${children.length}`, name: '', title: '' });
            }
          }
      
        const ln: LayoutNode = {
          id: node.id,
          name: node.name,
          title: node.title,
          img: node.img,
          parent,
          depth,
          size: 0,
          children: children.map(c => makeLayout(c, null, depth + 1)),
        };
      
        ln.children?.forEach(c => c.parent = ln);
        ln.size = ln.children && ln.children.length > 0 ? ln.children.reduce((s, c) => s + c.size, 0) : 1;
        return ln;
      };
      

    const root = makeLayout(rootNode);

    let cursor = 0;
    const total = root.size;
    const leafAngle = Math.max(minAngle, TAU / total);

    const assignAngles = (n: LayoutNode) => {
      if (!n.children?.length) {
        n.startAngle = cursor;
        n.endAngle = cursor + leafAngle;
        cursor += leafAngle;
      } else {
        const start = cursor;
        n.children.forEach(assignAngles);
        n.startAngle = start;
        n.endAngle = cursor;
      }
    };

    assignAngles(root);
    return root;
  }, [rootNode, minAngle]);

  if (!layoutRoot) return;

  const nodes = useMemo(() => {
    const arr: LayoutNode[] = [];
    const walk = (n: LayoutNode) => {
      arr.push(n);
      n.children?.forEach(walk);
    };
    walk(layoutRoot);
    return arr;
  }, [layoutRoot]);

  const cx = width / 2;
  const cy = height / 2;

  const [hovered, setHovered] = useState<string | number | null>(null);
  const [selected, setSelected] = useState<string | number | null>(null);

  const handleClick = (n: PersonNode) => {
    setSelected(n.id);
    onSelect?.(n);
  };

  return (
    <div style={{ width, height }}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>

        <g>
          {nodes.map(n => {
            const innerR = innerRadius + n.depth * layerThickness;
            const outerR = innerRadius + (n.depth + 1) * layerThickness - 4;
            const start = n.startAngle ?? 0;
            const end = n.endAngle ?? start + 0.001;
            const path = arcPath(cx, cy, innerR, outerR, start, end);

            const isHovered = hovered === n.id;
            const isSelected = selected === n.id;
            const fill = isSelected ? "#FFF" : isHovered ? "#FFF" : `#F0F0F3`;

            const mid = (start + end) / 2;
            const labelR = innerR + (outerR - innerR) / 2;
            const labelPos = polarToCartesian(cx, cy, labelR, mid);

            return (
              <g key={n.id} onMouseEnter={() => setHovered(n.id)} onMouseLeave={() => setHovered(null)} onClick={() => handleClick(n)} style={{ cursor: 'pointer' }}>
                <path d={path} fill={fill} stroke="#00002F26"  strokeWidth={0.6} />
                {end - start > 0.05 && (
                  <text x={labelPos.x} y={labelPos.y} fontSize={12} textAnchor="middle" dominantBaseline="middle" style={{ pointerEvents: 'none' }}>
                    {n.name ?? n.id}
                  </text>
                )}
              </g>
            );
          })}
        </g>

        <g>
          <circle cx={cx} cy={cy} r={innerRadius + 65} fill={"" + `${selected == rootNode!.id ? "#FFF" : "#F0F0F3"}`} stroke="#00002F26" onMouseEnter={() => setHovered(rootNode!.id)} onMouseLeave={() => setHovered(null)} onClick={() => handleClick(rootNode!)}/>
          <text x={cx} y={cy} fill="black" textAnchor="middle" dominantBaseline="middle">
            {rootNode?.name ?? rootNode?.id}
          </text>
        </g>
      </svg>
    </div>
  );
}
