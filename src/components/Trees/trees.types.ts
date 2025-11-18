export type PersonNode = {
  id: string | null;
  name?: string;
  title?: string;
  img?: string;
  children?: PersonNode[];
  pid?: string
};

export type LayoutNode = {
  id: string | null;
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

export type Props = {
  data: PersonNode[];
  width?: number;
  height?: number;
  layerThickness?: number;
  innerRadius?: number;
  minAngle?: number;
  onSelect?: (node: PersonNode) => void;
  treeId: string
};

export const TAU = Math.PI * 2;

export function polarToCartesian(cx: number, cy: number, radius: number, angle: number) {
  return {
    x: cx + radius * Math.cos(angle - Math.PI / 2),
    y: cy + radius * Math.sin(angle - Math.PI / 2),
  };
}

export function arcPath(cx: number, cy: number, innerR: number, outerR: number, startAngle: number, endAngle: number) {
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

export function buildTreeFromArray(data: PersonNode[]): PersonNode | null {
  const map = new Map<string | null, PersonNode & { children: PersonNode[] }>();
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