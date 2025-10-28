import { svg } from "d3";
import React, { useCallback } from "react";
import './ButStyle.css'
import { createPersonFx, getPersonByIdFx, updatePersonFx } from "../stores/personStore";
import { Gender } from "../types";

type NodeModalProps = {
  isOpen: boolean;
  nodeId: string | null;
  onClose: () => void;
  onAdd?: (nodeId: string) => void;
  onEdit?: (nodeId: string) => void;
};

const AddUnit: React.FC<NodeModalProps> = ({ isOpen, nodeId, onClose, onEdit }) => {
  if (!isOpen) return null;
  const [form, setForm] = React.useState({
    lastName: "",
    firstName: "",
    gender: "unknown",
  });
  
  const handleChange = (key: keyof typeof form, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };
  
  const onAdd = useCallback(async (data: any) => {
    const currentUser = await getPersonByIdFx(nodeId ?? "")
    try {
      if (nodeId != null)
      await createPersonFx({
        name: `${data.firstName} ${data.lastName}`.trim(),
        givenName: data.firstName || null,
        surname: data.lastName || null,
        gender: data.gender === "male" ? Gender.MALE : data.gender === "female" ? Gender.FEMALE : Gender.UNKNOWN,
        treeId: "cmhalonh50008uzr4luzpjgdz", // сюда передай ID активного дерева
        birthDate: null,
        birthPlace: null,
        deathDate: null,
        deathPlace: null,
        img: null,
        spouseId: null,
        childId: currentUser.id,
      });
      } catch (error) {
      console.error("Ошибка при добавлении:", error);
    }
  }, []);
  const Trash = () => (
    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 8V15M7.5 8V15M3.5 4V15.8C3.5 16.9201 3.5 17.4798 3.71799 17.9076C3.90973 18.2839 4.21547 18.5905 4.5918 18.7822C5.0192 19 5.57899 19 6.69691 19H12.3031C13.421 19 13.98 19 14.4074 18.7822C14.7837 18.5905 15.0905 18.2839 15.2822 17.9076C15.5 17.4802 15.5 16.921 15.5 15.8031V4M3.5 4H5.5M3.5 4H1.5M5.5 4H13.5M5.5 4C5.5 3.06812 5.5 2.60241 5.65224 2.23486C5.85523 1.74481 6.24432 1.35523 6.73438 1.15224C7.10192 1 7.56812 1 8.5 1H10.5C11.4319 1 11.8978 1 12.2654 1.15224C12.7554 1.35523 13.1447 1.74481 13.3477 2.23486C13.4999 2.6024 13.5 3.06812 13.5 4M13.5 4H15.5M15.5 4H17.5" stroke="#D25652" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>//корзинка
  )
  const X = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13 13L7.00002 7.00002M7.00002 7.00002L1 1M7.00002 7.00002L13 1M7.00002 7.00002L1 13" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
        <button style={{border: "none", position: "relative", left: "480px"}}>
          <X />
        </button>
        <div style={{display: "flex", justifyContent: "center", paddingBottom: "15px"}}>
          <img className="rot" style={{width: "150px", borderRadius: "15px"}} src="https://avatars.mds.yandex.net/i?id=7459bbfa751b916ab3cdc2c57a3fc3cadf7ede73-17395776-images-thumbs&n=13" alt="" /> {/*Картинка юнита */}
        </div>
        <h2 style={{display: "flex", justifyContent: "center", paddingBottom: "24px"}}>Unit</h2> { /*передача юнита*/ }
          <div style={{display: "flex", justifyContent: "center", gap: "5px", flexDirection: "column"}}>   

            <input type="tel" placeholder="Фамилия" style={{backgroundColor: "white", padding:"10px 5px", border: "1px solid #D7D7DF", borderRadius: "5px", marginBottom: "15px"}} onChange={e => handleChange("lastName", e.target.value)}/>
            <input type="tel" placeholder="Имя" style={{backgroundColor: "white", padding:"10px 5px", border: "1px solid #D7D7DF", borderRadius: "5px", marginBottom: "15px"}} onChange={e => handleChange("firstName", e.target.value)}/>
            <input type="tel" placeholder="Отчество" style={{backgroundColor: "white", padding:"10px 5px", border: "1px solid #D7D7DF", borderRadius: "5px", marginBottom: "15px"}}/>
          
          
          <div style={{display: "flex", justifyContent: "center", gap: "35px", paddingBottom: "25px"}}>
            <p><input type="radio" name= "gender" onChange={() => handleChange("gender", "female")}/> Женщина</p>
            <p><input type="radio" name= "gender" onChange={() => handleChange("gender", "male")}/> Мужчина</p>
          </div>
        </div>
            
        {/* <h3 style={{ marginTop: 0 }}>Узел: {nodeId}</h3> */} {/*хз что за ххх*/}
        <div style={{display: "flex", justifyContent: "center"}}>
            <a style={{color: "black", textAlign: "center", paddingBottom: "10px"}} href="#">Заполнить дополнительную информацию</a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px", marginTop: "10px", paddingBottom: "12px" }}>

            <button style={{border: "none", borderRadius: "4px", backgroundColor: "#30A46C", padding: "10px 160px", color: "white"}} onClick={() => onAdd(form)}>Добавить родственика</button>//Редактировать
          <button className="wobble" style={{backgroundColor: "#E2E2E8", border: "none", borderRadius: "4px", color: "#D25652", padding: "8px 130px", fontSize: "18px", display: "flex", justifyContent: "center", gap: "5px", alignItems: "center"}} onClick={onClose}><Trash /> Удалить</button>{/* Закрыть */}
        </div>
      </div>
    </div>
  );
};


export default AddUnit;
