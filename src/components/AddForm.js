import { useState } from "react";

export default function AddForm({ onAddItem }) {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tabNo, setTabNo] = useState(null);
  const [status, setStatus] = useState("Отдых");

  function handleSubmit(e) {
    e.preventDefault();
    const addItem = {
      firstName,
      middleName,
      lastName,
      tabNo,
      status,
    };
    onAddItem(addItem);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
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
          type="number"
          value={tabNo}
          onChange={(e) => setTabNo(Number(e.target.value))}
        />
        <label>ℹ Статус</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value={"Отдых"}>Отдых</option>
          <option value={"I смена"}>I смена</option>
          <option value={"II смена"}>II смена</option>
          <option value={"Больничный"}>Больничный</option>
        </select>
      </div>
      <button className="button">✅ Принять</button>
    </form>
  );
}
