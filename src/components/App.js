import { useState } from "react";
import TeamList from "./TeamList";

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

  return (
    <div className="app">
      <h2>Team-List App</h2>
      <hr />
      <div className="main">
        <TeamList teamList={teamList} />
      </div>
      <div className="button-panel">
        <button className="button">➕ Добавить</button>
        <button className="button">➖ Удалить</button>
      </div>
    </div>
  );
}
