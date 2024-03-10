import { useState } from "react";
import TeamList from "./TeamList";
import AddForm from "./AddForm";
import EditForm from "./EditForm";

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
  const [selectedItem, setSelectedItem] = useState(null);

  function handleshowAddForm() {
    setShowAddForm((show) => !show);
    setSelectedItem(null);
  }

  function handleAddItem(addItem) {
    if (
      addItem.tabNo > 0 &&
      addItem.lastName &&
      addItem.firstName &&
      addItem.middleName
    ) {
      setTeamList((teamList) => [...teamList, addItem]);
      setShowAddForm(false);
    }
  }

  function handleEditItem(item) {
    setShowAddForm(false);
    teamList.map((x) =>
      x.tabNo === item.tabNo ? setSelectedItem(item) : null
    );
  }

  return (
    <div className="app">
      <h2>Team-List App</h2>
      <hr />
      <div className="main">
        <TeamList teamList={teamList} onEditItem={handleEditItem} />
      </div>
      <div className="button-panel">
        <button className="button" onClick={handleshowAddForm}>
          {showAddForm ? "Закрыть" : "➕ Добавить работника"}
        </button>
      </div>
      {selectedItem ? (
        <EditForm item={selectedItem} />
      ) : (
        showAddForm && <AddForm onAddItem={handleAddItem} />
      )}
    </div>
  );
}
