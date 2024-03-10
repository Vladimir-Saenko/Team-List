import { useState } from "react";
import TeamList from "./TeamList";
import AddForm from "./AddForm";

const initList = [
  {
    firstName: "Максим",
    middleName: "Ярославич",
    lastName: "Голошубин",
    tabNo: 27247,
    status: "II смена",
  },
  {
    firstName: "Владимир",
    middleName: "Иванович",
    lastName: "Саенко",
    tabNo: 27248,
    status: "I смена",
  },
  {
    firstName: "Антон",
    middleName: "Павлович",
    lastName: "Самойленко",
    tabNo: 27249,
    status: "Отдых",
  },
];

export default function App() {
  const [teamList, setTeamList] = useState(initList);
  const [showAddForm, setShowAddForm] = useState(false);

  function handleAddItem() {
    setShowAddForm((show) => !show);
  }

  return (
    <div className="app">
      <h2>Team-List App</h2>
      <hr />
      <div className="main">
        <TeamList teamList={teamList} />
      </div>
      <div className="button-panel">
        <button className="button" onClick={handleAddItem}>
          {showAddForm ? "Закрыть" : "➕ Добавить работника"}
        </button>
      </div>
      {showAddForm && <AddForm />}
    </div>
  );
}
