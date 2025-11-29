import React, { useEffect, useMemo, useRef, useState } from "react";
import { arcPath, buildTreeFromArray, polarToCartesian, TAU, type LayoutNode, type PersonNode, type Props } from "./trees.types";
import * as d3 from "d3";
import AddUnit from "../add_unit";
import EditUnit from "../updateUnit";

export default function RadialGenealogy({ data, width = 800, height = 800, layerThickness = 70, innerRadius = 40, minAngle = 0.02, onSelect, treeId }: Props) {
  

  const findMaxDepth = (node: PersonNode, depth = 0): number => {
    if (!node.children || node.children.length === 0) return depth;
    return Math.max(...node.children.map(c => findMaxDepth(c, depth + 1)));
  };

  const autoExpandTree = (node: PersonNode, depth = 0, maxDepth = 0): PersonNode => {
    if (depth > maxDepth + 1) return { ...node, children: [] };

    const children = Array.isArray(node.children) ? [...node.children] : [];

    if (depth <= maxDepth) {
      while (children.length < 2) {
        children.push({ id: `${node.id}-auto-${depth}-${children.length}`, name: '', title: '', children: [] });
      }
    }

    return {
      ...node,
      children: children.map(child => autoExpandTree(child, depth + 1, maxDepth))
    };
  };

  const rootNode = useMemo(() => {
    const baseTree = buildTreeFromArray(data);
  
    if (!baseTree) {
      return {
        id: 'root-auto',
        name: '',
        title: '',
        children: []
      };
    }
  
    const currentMax = findMaxDepth(baseTree);
    return autoExpandTree(baseTree, 0, currentMax);
  }, [data]);

  let maxDepth = 0;

  const layoutRoot = useMemo(() => {
    if (!rootNode) return null;

    const makeLayout = (node: PersonNode, parent: LayoutNode | null = null, depth = 0): LayoutNode => {
      let children: PersonNode[] = node.children || [];
      if (depth > maxDepth) maxDepth = depth;

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

  const nodes = useMemo(() => {
    const arr: LayoutNode[] = [];
    if (!layoutRoot) return arr; // handle safely inside
    const walk = (n: LayoutNode) => {
      arr.push(n);
      n.children?.forEach(walk);
    };
    walk(layoutRoot);
    return arr;
  }, [layoutRoot]);

  const [hovered, setHovered] = useState<string | number | null>(null);
  const [selected, setSelected] = useState<string | number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalNodeId, setModalNodeId] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [transform, setTransform] = useState(d3.zoomIdentity);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");

  
  if (!layoutRoot) return null;
  if (nodes.length === 0) return null;



  const cx = width / 2;
  const cy = height / 2;

  const handleClick = (n: LayoutNode) => {
    if (n.parent?.id?.includes('auto')) return

    if (!n.name) {
      setModalMode("add");
      setModalNodeId(n.parent ? n.parent.id : null);
    } else {
      setModalMode("edit");
      setModalNodeId(n.id);
    }
  
    setSelected(n.id);
    setModalOpen(true);
    onSelect?.(n as unknown as PersonNode);
  };
  
  
  


  const handleCloseModal = () => {
    setModalOpen(false);
    setModalNodeId(null);
  };

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

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <svg ref={svgRef} width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
        <g transform={transform.toString()}>
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
              <g
                key={n.id}
                onMouseEnter={() => setHovered(n.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleClick(n)}
                style={{ cursor: 'pointer' }}
              >
                <path d={path} fill={fill} stroke="#00002F26" strokeWidth={0.6} />
                {end - start > 0.05 && (
                  <text x={labelPos.x} y={labelPos.y} fontSize={12} textAnchor="middle" dominantBaseline="middle" style={{ pointerEvents: 'none' }}>
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
    fill={selected == layoutRoot!.id ? "#FFF" : "#F0F0F3"}
    stroke="#00002F26"
    onMouseEnter={() => setHovered(layoutRoot!.id)}
    onMouseLeave={() => setHovered(null)}
    onClick={() => handleClick(layoutRoot!)}  
  />
  <text x={cx} y={cy} fill="black" textAnchor="middle" dominantBaseline="middle">
    {layoutRoot?.name ?? layoutRoot?.id}
  </text>
</g>

      </svg>
      {modalMode === "add" ? (
  <AddUnit isOpen={modalOpen} nodeId={modalNodeId} onClose={handleCloseModal} treeId={treeId} />
) : (
  <EditUnit isOpen={modalOpen} nodeId={modalNodeId} onClose={handleCloseModal}/>
)}

    </div>
  );
}
