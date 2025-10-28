import { style, svg } from "d3";
import React from "react";
import "./ButStyle.css"

type NodeModalProps = {
  isOpen: boolean;
  nodeId: string | null;
  onClose: () => void;
  onAdd?: (nodeId: string) => void;
  onEdit?: (nodeId: string) => void;
};


const Create_new: React.FC<NodeModalProps> = ({ isOpen, nodeId, onClose, onAdd, onEdit }) => {
  if (!isOpen || !nodeId) return null;

  const Trash = () => (
    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 8V15M7.5 8V15M3.5 4V15.8C3.5 16.9201 3.5 17.4798 3.71799 17.9076C3.90973 18.2839 4.21547 18.5905 4.5918 18.7822C5.0192 19 5.57899 19 6.69691 19H12.3031C13.421 19 13.98 19 14.4074 18.7822C14.7837 18.5905 15.0905 18.2839 15.2822 17.9076C15.5 17.4802 15.5 16.921 15.5 15.8031V4M3.5 4H5.5M3.5 4H1.5M5.5 4H13.5M5.5 4C5.5 3.06812 5.5 2.60241 5.65224 2.23486C5.85523 1.74481 6.24432 1.35523 6.73438 1.15224C7.10192 1 7.56812 1 8.5 1H10.5C11.4319 1 11.8978 1 12.2654 1.15224C12.7554 1.35523 13.1447 1.74481 13.3477 2.23486C13.4999 2.6024 13.5 3.06812 13.5 4M13.5 4H15.5M15.5 4H17.5" stroke="#D25652" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.35)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#F0F0F3",
          padding: 20,
          borderRadius: 8,
          minWidth: 320,
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        <p style={{display: "flex", justifyContent: "center", paddingBottom: "24px"}}>Создайте новое семейное древо!</p>
          <div style={{display: "flex", justifyContent: "center", gap: "5px", flexDirection: "column"}}>            
            <input type="text" placeholder="Введете название" style={{backgroundColor: "white", padding:"10px 5px", border: "1px solid #D7D7DF", borderRadius: "5px", marginBottom: "15px"}}/>
        </div>
            
        {/* <h3 style={{ marginTop: 0 }}>Узел: {nodeId}</h3> */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px", marginTop: "10px", paddingBottom: "12px" }}>
          {onAdd && (
            <button className="wobble" style={{border: "none", borderRadius: "4px", backgroundColor: "#30A46C", padding: "8px 160px", color: "white"}} onClick={() => onAdd(nodeId)}>Создать</button>//Добавить
          )}
          {onEdit && (
            <button style={{border: "none", borderRadius: "4px", backgroundColor: "#30A46C", padding: "10px 160px", color: "white", display: "none"}} onClick={() => onEdit(nodeId)}>Добавить родственика</button>//Редактировать
          )}
          <button className="wobble" style={{backgroundColor: "#E2E2E8", border: "none", borderRadius: "4px", color: "#D25652", padding: "8px 130px", fontSize: "18px", display: "none", justifyContent: "center", gap: "5px", alignItems: "center"}} onClick={onClose}><Trash /> Удалить</button>{/* Закрыть */}
        </div>
      </div>
    </div>
  );
};

export default Create_new;
