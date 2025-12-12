import React, { useRef, useState } from "react";
import { useUnit } from "effector-react";
import { importGedcomFx } from "../stores/personStore";
import { downloadGedcom } from "../types";
import jsPDF from "jspdf";

export async function downloadPdfWithSvg(
  svgElement: SVGSVGElement,
  filename = "export.pdf",
  scale = 2
) {
  const bbox = svgElement.getBBox();
  const width = bbox.width * scale;
  const height = bbox.height * scale;

  const xml = new XMLSerializer().serializeToString(svgElement);
  const svgBlob = new Blob([xml], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);

  const img = new Image();
  img.src = url;
  await img.decode();

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(img, 0, 0, width, height);

  const pdf = new jsPDF({
    unit: "px",
    format: [width, height],
    orientation: width > height ? "landscape" : "portrait"
  });

  pdf.addImage(
    canvas.toDataURL("image/png"),
    "PNG",
    0,
    0,
    width,
    height
  );

  pdf.save(filename);

  URL.revokeObjectURL(url);
}



export function Gedcom({ treeId, filteredPersons }: any) {
  const importGedcom = useUnit(importGedcomFx);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [exportOpen, setExportOpen] = useState(false);

  const onImportClick = () => {
    fileInputRef.current?.click();
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    importGedcom({ treeId, file })
      .then((res: any) => alert(`Импортировано ${res.imported} персон`))
      .catch((err: any) => alert("Ошибка импорта: " + err.message));

    e.target.value = "";
  };

  const onExportClick = (format: "gedcom" | "pdf") => {
    let svg = document.getElementById("svg") as SVGSVGElement | null;
    if (format === "gedcom") downloadGedcom(filteredPersons);
    if (format === "pdf" && svg != null) downloadPdfWithSvg(svg);
  };

  return (
    <div className="port-container">
      <button onClick={() => setExportOpen(!exportOpen)}>Экспорт</button>

      {exportOpen && (
        <div
          style={{
            position: "absolute",
            top: "-200%",
            left: 0,
            marginTop: "6px",
            background: "white",
            border: "1px solid #ccc",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            padding: "10px",
            borderRadius: "6px",
            zIndex: 20,
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            minWidth: "150px"
          }}
        >
          <button onClick={() => onExportClick("gedcom")}>GEDCOM</button>

          <button onClick={() => onExportClick("pdf")}>PDF</button>
        </div>
      )}

      <button onClick={onImportClick}>Импортировать</button>
      <input
        ref={fileInputRef}
        type="file"
        accept=".ged,.gedcom"
        style={{ display: "none" }}
        onChange={onFileChange}
      />
    </div>
  );
}
