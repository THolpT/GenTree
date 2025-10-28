import React, { useEffect, useMemo, useRef, useState } from "react";
import { type PersonNode, type LayoutNode, buildTreeFromArray, TAU, polarToCartesian, arcPath, type Props } from "./trees.types";
import * as d3 from "d3";

export default function FanGenealogy({ data, width = 800, height = 800, layerThickness = 70, innerRadius = 40, minAngle = 0.02, onSelect }: Props) {
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
    const leafAngle = Math.max(minAngle, TAU / total) / 2;

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

  const svgRef = useRef<SVGSVGElement>(null);
  const [transform, setTransform] = useState(d3.zoomIdentity);
  
    useEffect(() => {
    const zoomBehavior = d3.zoom<SVGSVGElement, unknown>()
      .filter((event) => {
        if (event.type === "wheel") return true;
        if (event.type === "mousedown") return (event as MouseEvent).button === 1;
        return false;
      })
      .scaleExtent([0.1, 5])
      .on("zoom", (event) => setTransform(event.transform));
  
    d3.select(svgRef.current).call(zoomBehavior as any);
  
    }, []);
const ROTATE = -Math.PI / 2; // -90° в радианах

return (
  <div style={{ width: "100%", height: "100%" }}>
    <svg ref={svgRef} width="100%" height="100%">
      <g transform={transform.toString()}>
        {nodes.map(n => {
          const innerR = innerRadius + n.depth * layerThickness;
          const outerR = innerR + layerThickness - 4;
          const start = (n.startAngle ?? 0) + ROTATE;
          const end = (n.endAngle ?? start + 0.001) + ROTATE;

          const path = arcPath(cx, cy, innerR, outerR, start, end);

          const isHovered = hovered === n.id;
          const isSelected = selected === n.id;
          const fill = isSelected ? "#FFF" : isHovered ? "#FFF" : "#F0F0F3";

          const mid = (start + end) / 2;
          const labelR = innerR + (outerR - innerR) / 2;
          const labelPos = polarToCartesian(cx, cy, labelR, mid);

          return (
            <g
              key={n.id}
              onMouseEnter={() => setHovered(n.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleClick(n)}
              style={{ cursor: "pointer" }}
            >
              <path d={path} fill={fill} stroke="#00002F26" strokeWidth={0.6} />
              {end - start > 0.05 && (
                <text
                  x={labelPos.x}
                  y={labelPos.y}
                  fontSize={12}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{ pointerEvents: "none" }}
                >
                  {n.name ?? n.id}
                </text>
              )}
            </g>
          );
        })}
      </g>

      <g transform={transform.toString()}>
        <circle
          cx={cx}
          cy={cy}
          r={innerRadius + 65}
          fill={selected === rootNode!.id ? "#FFF" : "#F0F0F3"}
          stroke="#00002F26"
          onMouseEnter={() => setHovered(rootNode!.id)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => handleClick(rootNode!)}
        />
        <text
          x={cx}
          y={cy}
          fill="black"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {rootNode?.name ?? rootNode?.id}
        </text>
      </g>
    </svg>
  </div>
);

}
