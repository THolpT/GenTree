import FamilyTree from "@balkangraph/familytree.js";
import React from "react";
import { Component, useEffect, useRef } from "react";

const FamilyTreeComponent = ({ nodes }: {nodes: any}) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (nodes.length > 0 && chartRef.current) {
            // Создаем кастомный шаблон на основе стилей второго древа
            FamilyTree.templates.main = Object.assign({}, FamilyTree.templates.base);
            FamilyTree.templates.main.size = [106, 116];
            FamilyTree.templates.main.node = 
                `<rect x="0" y="0" height="116" width="106" fill="#F0F0F3" stroke-width="1" stroke="#00002F26" rx="12" ry="12"></rect>`;
            FamilyTree.templates.main.img_0 = 
                `
                <clipPath id="{randId}">
                    <rect x="22" y="7" width="63" height="62" rx="10" ry="10" stroke-width="100" stroke="#003377"/>
                </clipPath>
                <rect x="22" y="7" width="62" height="62" rx="8" ry="8" fill="none" stroke="rgba(0, 51, 119, 0.17)" stroke-width="2"/>
                <image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="22" y="7" width="62" height="62"></image>`;
            FamilyTree.templates.main.field_0 = 
                `<text data-width="100" data-text-overflow="multiline" style="font-size: 10px;font-weight: 500; color: black" fill="#2D2D2D" x="52" y="90" text-anchor="middle">{val}</text>`;
            FamilyTree.templates.main.plus = ``;
            FamilyTree.templates.main.minus = ``;

            // Создаем производные шаблоны для разных типов узлов
            FamilyTree.templates.main_male = Object.assign({}, FamilyTree.templates.main);
            FamilyTree.templates.main_female = Object.assign({}, FamilyTree.templates.main);
            FamilyTree.templates.main_male_child = Object.assign({}, FamilyTree.templates.main_male);
            FamilyTree.templates.main_female_child = Object.assign({}, FamilyTree.templates.main_female);

            const family = new FamilyTree(chartRef.current, {
                template: "main",
                enableSearch: false,
                nodeBinding: {
                    field_0: "first_name",
                    img_0: "avatar",
                },
                nodes,
            });
        }
    }, [nodes]);

    return <div ref={chartRef} style={{ height: "100%" }} />;
};


export default FamilyTreeComponent;