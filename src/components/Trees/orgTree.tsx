import OrgChart from "@balkangraph/orgchart.js";
import React, { Component, createRef } from "react";
import AddUnit from "../add_unit";
import EditUnit from "../updateUnit"; // ← добавь, если ещё нет
import type { Person } from "../../types";

type MyProps = OrgChart.options & {
  treeId: string;
};
type MyState = {
  isModalOpen: boolean;
  selectedNodeId: string | null;
  mode: "add" | "edit";
};

export default class Chart extends Component<MyProps, MyState> {
  private divRef = createRef<HTMLDivElement>();
  chart: any;

  constructor(props: MyProps) {
    super(props);
    this.state = {
      isModalOpen: false,
      selectedNodeId: null,
      mode: "add",
    };
  }
  
  componentDidUpdate(prevProps: MyProps) {
    if (prevProps.nodes !== this.props.nodes && this.chart) {
      this.chart.load(this.props.nodes);
    }
  }

  async componentDidMount() {
    if (!this.divRef.current) return;

    // === TEMPLATE (оставил твой, не менял) ===
    OrgChart.templates.myTemplate = {
      ...OrgChart.templates.ula,
      size: [106, 140],
      node: `<rect x="0" y="0" height="116" width="106" fill="#F0F0F3" stroke-width="1" stroke="#00002F26" rx="12" ry="12"></rect>`,
      img_0: `
        <clipPath id="{randId}">
          <rect x="22" y="7" width="63" height="62" rx="10" ry="10"/>
        </clipPath>
        <rect x="22" y="7" width="62" height="62" rx="8" ry="8" fill="none" stroke="rgba(0, 51, 119, 0.17)" stroke-width="2"/>
        <image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="22" y="7" width="62" height="62"></image>
      `,
      field_0: `<text data-width="100" style="font-size: 10px;font-weight: 500;" fill="#2D2D2D" x="52" y="90" text-anchor="middle">{val}</text>`,
      plus: ``,
      minus: ``,

      /* Кнопка добавления (+) */
      nodeMenuButton: `
        <g style="cursor:pointer;" transform="matrix(1,0,0,1,53,122)" data-action="add" data-node-id="{id}" id="ui">
          <rect x="-12" y="-12" width="24" height="24" fill="#00A86B" rx="3" ry="3"></rect>
          <text x="0" y="5" font-size="16" fill="#fff" text-anchor="middle">+</text>
        </g>
      `,
    };

    this.chart = new OrgChart(this.divRef.current, {
      nodes: this.props.nodes,
      template: "myTemplate",
      mouseScrool: OrgChart.action.none,
      enableSearch: false,
      nodeContextMenu: {},
      nodeMenu: {},
      nodeBinding: {
        field_0: "name",
        img_0: "img",
      },
    });

    // 🎯 ОБРАБОТКА КЛИКОВ
    this.chart.on("click", (sender: any, args: any) => {
      const evt = args?.event;
      if (!evt) return;

      let el: any = evt.target;

      // Проверяем всю цепочку родителей
      while (el && el !== this.divRef.current) {

        // ==== КЛИК ПО КНОПКЕ "+" ====
        if (el.getAttribute && el.getAttribute("data-action") === "add") {
          const nodeId = el.getAttribute("data-node-id") || args.node.id;

          // ❗ Ограничение: предков может быть максимум 2
          const node = this.chart.get(nodeId);
          let children = OrgChart.childrenCount(this.chart, this.chart.getNode(nodeId))

          if (children >= 2) {
            alert("Нельзя добавить больше двух предков!");
            return false;
          }

          this.setState({
            isModalOpen: true,
            selectedNodeId: nodeId,
            mode: "add",
          });

          evt.stopPropagation?.();
          evt.preventDefault?.();
          this.chart.load(this.props.nodes);
          return false;
        }

        el = el.parentNode;
      }

      // ==== КЛИК ПО ЧЕЛОВЕКУ (сам узел) ====
      this.setState({
        isModalOpen: true,
        selectedNodeId: args.node.id,
        mode: "edit",
      });
      this.chart.load(this.props.nodes);

      return false;
    });
  }

  closeModal = () => {
    this.chart.load(this.props.nodes);
    this.setState({ isModalOpen: false, selectedNodeId: null });
  };

  render() {
    const { mode } = this.state;

    return (
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <div ref={this.divRef} style={{ width: "100%", height: "100%", zIndex: 1 }}></div>

        {mode === "add" ? (
          <AddUnit
            isOpen={this.state.isModalOpen}
            nodeId={this.state.selectedNodeId}
            onClose={this.closeModal}
            treeId={this.props.treeId}
          />
        ) : (
          <EditUnit
            isOpen={this.state.isModalOpen}
            nodeId={this.state.selectedNodeId}
            onClose={this.closeModal}
          />
        )}
      </div>
    );
  }
}
