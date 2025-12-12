import React, { useCallback, useEffect, useState } from "react";
import "./ButStyle.css";
import { updatePersonFx, getPersonByIdFx, deletePersonFx } from "../stores/personStore";
import { Gender } from "../types";

type EditUnitProps = {
  isOpen: boolean;
  nodeId: string | null;
  onClose: () => void;
};

const EditUnit: React.FC<EditUnitProps> = ({ isOpen, nodeId, onClose }) => {
  if (!isOpen) return null;

  const [form, setForm] = useState({
    lastName: "",
    firstName: "",
    patronymic: "",
    gender: "unknown",
    birthDate: "",
    birthPlace: "",
    deathDate: "",
    deathPlace: "",
    marriageDate: "",
    marriagePlace: ""
  });

  useEffect(() => {
    const load = async () => {
      if (!nodeId) return;
      const data = await getPersonByIdFx(nodeId);
      if (!data) return;

      setForm({
        lastName: data.givenName ?? "",
        firstName: data.name ?? "",
        patronymic: data.surname ?? "",
        gender:
          data.gender === Gender.MALE
            ? "male"
            : data.gender === Gender.FEMALE
            ? "female"
            : "unknown",
        birthDate: data.birthDate ? data.birthDate.split("T")[0] : "",
        birthPlace: data.birthPlace ?? "",
        deathDate: data.deathDate ? data.deathDate.split("T")[0] : "",
        deathPlace: data.deathPlace ?? "",
        marriageDate: data.marriageDate ? data.marriageDate.split("T")[0] : "",
        marriagePlace: data.marriagePlace ?? ""
      });
    };
    load();
  }, [nodeId]);

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toISO = (date: string) => (!date ? null : new Date(date).toISOString());

  const onSave = useCallback(async () => {
    try {
      if (!form.firstName?.trim()) {
        alert("Введите имя");
        throw new Error();
      }
      if (!nodeId) return;

      await updatePersonFx({
        id: nodeId,
        data: {
          name: form.firstName,
          givenName: form.lastName || null,
          surname: form.patronymic || null,
          gender:
            form.gender === "male"
              ? Gender.MALE
              : form.gender === "female"
              ? Gender.FEMALE
              : Gender.UNKNOWN,
          birthDate: toISO(form.birthDate),
          birthPlace: form.birthPlace || null,
          marriageDate: toISO(form.marriageDate),
          marriagePlace: form.marriagePlace || null,
          deathDate: toISO(form.deathDate),
          deathPlace: form.deathPlace || null,
        },
      });

      onClose();
    } catch (error) {
      console.error("Ошибка при сохранении:", error);
    }
  }, [form, nodeId, onClose]);

  const onDelete = useCallback(async () => {
    try {
      if (!nodeId) return;
      await deletePersonFx(nodeId);
      onClose();
    } catch (error) {
      console.error("Ошибка при удалении:", error);
    }
  }, [nodeId, onClose]);

  const X = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 13L7.00002 7.00002M7.00002 7.00002L1 1M7.00002 7.00002L13 1M7.00002 7.00002L1 13"
        stroke="#222222"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

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
          width: "500px",
          maxWidth: "90%",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        <button
          style={{ border: "none", position: "relative", left: "480px" }}
          onClick={() => onClose()}
        >
          <X />
        </button>

        {/* <div style={{ display: "flex", justifyContent: "center", paddingBottom: "15px" }}>
          <img
            className="rot"
            style={{ width: "150px", borderRadius: "15px" }}
            src="https://avatars.mds.yandex.net/i?id=7459bbfa751b916ab3cdc2c57a3fc3cadf7ede73-17395776-images-thumbs&n=13"
            alt=""
          />
        </div> */}

        <h2 style={{ display: "flex", justifyContent: "center", paddingBottom: "24px" }}>
          Редактирование
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "5px",
            flexDirection: "column",
          }}
        >
                    <label className="modalLabel">Фамилия</label>
          <input
            type="text"
            placeholder="Фамилия"
            value={form.lastName}
            style={{
              backgroundColor: "white",
              padding: "10px 5px",
              border: "1px solid #D7D7DF",
              borderRadius: "5px",
              marginBottom: "15px",
            }}
            onChange={(e) => handleChange("lastName", e.target.value)}
          />
          <label className="modalLabel">Имя <span style={{color: "red"}}>*</span></label>
          <input
            type="text"
            placeholder="Имя"
            value={form.firstName}
            style={{
              backgroundColor: "white",
              padding: "10px 5px",
              border: "1px solid #D7D7DF",
              borderRadius: "5px",
              marginBottom: "15px",
            }}
            onChange={(e) => handleChange("firstName", e.target.value)}
          />
          <label className="modalLabel">Отчество</label>
          <input
            type="text"
            placeholder="Отчество"
            value={form.patronymic}
            style={{
              backgroundColor: "white",
              padding: "10px 5px",
              border: "1px solid #D7D7DF",
              borderRadius: "5px",
              marginBottom: "15px",
            }}
            onChange={(e) => handleChange("patronymic", e.target.value)}
          />
          <label className="modalLabel">Дата рождения</label>
          <input
            type="date"
            value={form.birthDate}
            style={{
              backgroundColor: "white",
              padding: "10px 5px",
              border: "1px solid #D7D7DF",
              borderRadius: "5px",
              marginBottom: "15px",
            }}
            onChange={(e) => handleChange("birthDate", e.target.value)}
          />
          <label className="modalLabel">Место рождения</label>
          <input
            type="text"
            placeholder="Место рождения"
            value={form.birthPlace}
            style={{
              backgroundColor: "white",
              padding: "10px 5px",
              border: "1px solid #D7D7DF",
              borderRadius: "5px",
              marginBottom: "15px",
            }}
            onChange={(e) => handleChange("birthPlace", e.target.value)}
          />
                    <label className="modalLabel">Дата свадьбы</label>
          <input
            type="date"
            value={form.marriageDate}
            placeholder="Дата свадьбы"
            style={{ backgroundColor: "white", padding: "10px 5px", border: "1px solid #D7D7DF", borderRadius: "5px", marginBottom: "15px" }}
            onChange={e => handleChange("marriageDate", e.target.value)}
          />

          <label className="modalLabel">Место свадьбы</label>
          <input
            type="text"
            value={form.marriagePlace}
            placeholder="Место свадьбы"
            style={{ backgroundColor: "white", padding: "10px 5px", border: "1px solid #D7D7DF", borderRadius: "5px", marginBottom: "15px" }}
            onChange={e => handleChange("marriagePlace", e.target.value)}
          />
          <label className="modalLabel">Дата смерти</label>
          <input
            type="date"
            value={form.deathDate}
            style={{
              backgroundColor: "white",
              padding: "10px 5px",
              border: "1px solid #D7D7DF",
              borderRadius: "5px",
              marginBottom: "15px",
            }}
            onChange={(e) => handleChange("deathDate", e.target.value)}
          />
          <label className="modalLabel">Место смерти</label>
          <input
            type="text"
            placeholder="Место смерти"
            value={form.deathPlace}
            style={{
              backgroundColor: "white",
              padding: "10px 5px",
              border: "1px solid #D7D7DF",
              borderRadius: "5px",
              marginBottom: "15px",
            }}
            onChange={(e) => handleChange("deathPlace", e.target.value)}
          />

          <div style={{ display: "flex", justifyContent: "center", gap: "35px", paddingBottom: "25px" }}>
            <p>
              <input
                type="radio"
                name="gender"
                checked={form.gender === "female"}
                onChange={() => handleChange("gender", "female")}
              />{" "}
              Женщина
            </p>
            <p>
              <input
                type="radio"
                name="gender"
                checked={form.gender === "male"}
                onChange={() => handleChange("gender", "male")}
              />{" "}
              Мужчина
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
            marginTop: "10px",
            paddingBottom: "12px",
          }}
        >
          <button
            style={{
              border: "none",
              borderRadius: "4px",
              backgroundColor: "#30A46C",
              padding: "10px 160px",
              color: "white",
            }}
            onClick={onSave}
          >
            Сохранить
          </button>

          <button
            style={{
              border: "none",
              borderRadius: "4px",
              backgroundColor: "#D25652",
              padding: "10px 160px",
              color: "white",
            }}
            onClick={onDelete}
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUnit;
