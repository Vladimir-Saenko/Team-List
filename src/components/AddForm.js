import { useState } from "react";

export default function AddForm() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tabNo, setTabNo] = useState("");
  const [status, setStatus] = useState("relax");

  return (
    <form className="add-form">
      <h4>Добавить работника в состав партии</h4>
      <div className="new-item">
        <label>Фамилия</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>Имя</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Отчество</label>
        <input
          type="text"
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
        />
        <label>🆔 Табельный номер</label>
        <input
          type="text"
          value={tabNo}
          onChange={(e) => setTabNo(e.target.value)}
        />
        <label>ℹ Статус</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value={"relax"}>Отдых</option>
          <option value={"1_shift"}>I смена</option>
          <option value={"2_shift"}>II смена</option>
          <option value={"sick_leave"}>Больничный</option>
        </select>
      </div>
      <button className="button">✅ Принять</button>
    </form>
  );
}
