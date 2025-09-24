import OrgChart from "@balkangraph/orgchart.js";
import React from "react";
import { Component, useEffect, useRef } from "react";

type MyProps = OrgChart.options;
export default class Chart extends Component<MyProps> {
    private divRef: React.RefObject<HTMLInputElement | null>;
    chart: OrgChart | undefined;

    constructor(props: {}) {
        super(props);
        this.divRef = React.createRef();
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        if (this.divRef.current != null) {
            // how to create your own template
            OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.ana);
            OrgChart.templates.myTemplate.size = [106, 116];
            OrgChart.templates.myTemplate.node = 
                `<rect x="0" y="0" height="116" width="106" fill="#F0F0F3" stroke-width="1" stroke="#00002F26" rx="12" ry="12"></rect>`;
            OrgChart.templates.myTemplate.img_0 = 
                `
                <clipPath id="{randId}">
                    <rect x="22" y="7" width="63" height="62" rx="10" ry="10" stroke-width="100" stroke="#003377"/>
                </clipPath>
                  <rect x="22" y="7" width="62" height="62" rx="8" ry="8"fill="none"stroke="rgba(0, 51, 119, 0.17)"stroke-width="2"/>
                <image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="22" y="7" width="62" height="62"></image>`;
            OrgChart.templates.myTemplate.field_0 = 
                `<text data-width="100" data-text-overflow="multiline" style="font-size: 10px;font-weight: 500;" fill="#2D2D2D" x="52" y="90" text-anchor="middle">{val}</text>`;
            OrgChart.templates.myTemplate.plus = ``;
            OrgChart.templates.myTemplate.minus = ``;

            this.chart = new OrgChart(this.divRef.current, {
                nodes: this.props.nodes,
                template: "myTemplate",
                enableSearch: false,
                nodeBinding: {
                    field_0: "name",
                    img_0: "img"
                }
            });
        }
        
    }

    render() {
        return (
            <div id="tree" ref={this.divRef}></div>
        );
    }
}