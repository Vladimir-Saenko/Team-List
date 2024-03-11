import { useState } from "react";

export default function EditForm({ item, onChangeStatus }) {
  const fullName = `${item.lastName} ${item.firstName} ${item.middleName}`;
  const [newStatus, setNewStatus] = useState(item.status);

  function handleSubmit(e) {
    e.preventDefault();
    onChangeStatus(newStatus);
  }

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <h4>Редактирование информации о работнике</h4>
      <div className="edit-item">
        <h5>{fullName}</h5>
        <p>🆔 {item.tabNo}</p>
        <p>
          ℹ Статус{" "}
          <select
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
          >
            <option value={"Отдых"}>Отдых</option>
            <option value={"I смена"}>I смена</option>
            <option value={"II смена"}>II смена</option>
            <option value={"Больничный"}>Больничный</option>
          </select>
        </p>
      </div>
      <button className="button">✅ Принять</button>
    </form>
  );
}
