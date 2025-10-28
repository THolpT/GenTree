import OrgChart from "@balkangraph/orgchart.js";
import React, { Component, createRef } from "react";
import Modal from "../add_unit"; // <-- подключаем

type MyProps = OrgChart.options;
type MyState = {
  isModalOpen: boolean;
  selectedNodeId: string | null;
};

export default class Chart extends Component<MyProps, MyState> {
  private divRef = createRef<HTMLDivElement>();
  chart: any;

  constructor(props: MyProps) {
    super(props);
    this.state = {
      isModalOpen: false,
      selectedNodeId: null,
    };
  }

  openModal = (id: string) => {
    this.setState({ isModalOpen: true, selectedNodeId: id });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false, selectedNodeId: null });
  };

  handleAdd = (id: string) => {
    console.log("Добавить к узлу:", id);
    // здесь можно вызывать chart.addNode(...)
    this.closeModal();
  };

  handleEdit = (id: string) => {
    console.log("Редактировать узел:", id);
    // логика редактирования
    this.closeModal();
  };

  componentDidMount() {
    if (!this.divRef.current) return;

    // шаблон + квадратная кнопка
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
      nodeMenuButton: `
        <g style="cursor:pointer;" transform="matrix(1,0,0,1,53,122)" data-action="openModal" data-node-id="{id}">
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

    this.chart.on("click", (sender: any, args: any) => {
        if (args?.node) {
            const nodeId = args.node.id;
            this.setState({ isModalOpen: true, selectedNodeId: nodeId});
          }
    });
  }

  render() {
    return (
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <div ref={this.divRef} style={{ width: "100%", height: "100%", zIndex: 1 }}></div>

        <Modal
          isOpen={this.state.isModalOpen}
          nodeId={this.state.selectedNodeId}
          onClose={this.closeModal}
          onAdd={this.handleAdd}
          onEdit={this.handleEdit}
        />
      </div>
    );
  }
}
