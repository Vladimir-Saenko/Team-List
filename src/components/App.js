import { useState } from "react";
import TeamList from "./TeamList";
import AddForm from "./AddForm";
import EditForm from "./EditForm";

const initList = [
  {
    firstName: "Иван",
    middleName: "Иванович",
    lastName: "Иванов",
    tabNo: 11111,
    status: "II смена",
  },
  {
    firstName: "Сергей",
    middleName: "Сергеевич",
    lastName: "Сергеев",
    tabNo: 22222,
    status: "I смена",
  },
  {
    firstName: "Антон",
    middleName: "Антонович",
    lastName: "Антонов",
    tabNo: 33333,
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

  function handleChangeStatus(newStatus) {
    setSelectedItem(null);
    setTeamList(
      teamList.map((item) =>
        item.tabNo === selectedItem.tabNo
          ? { ...item, status: newStatus }
          : (item.status === "I смена" || item.status === "II смена") &
            (item.status === newStatus)
          ? { ...item, status: "Отдых" }
          : item
      )
    );
  }

  function handleDeleteItem(deleteItem) {
    let isDelete = window.confirm(
      "Вы уверены, что хотите удалить работника из списка?"
    );
    if (isDelete) {
      setSelectedItem(null);
      setTeamList(teamList.filter((item) => item.tabNo !== deleteItem.tabNo));
    }
  }

  return (
    <div className="app">
      <h2>Team-List App</h2>
      <hr />
      <div className="main">
        <TeamList
          teamList={teamList}
          onEditItem={handleEditItem}
          onDeleteItem={handleDeleteItem}
        />
      </div>
      <div className="button-panel">
        <button className="button" onClick={handleshowAddForm}>
          {showAddForm ? "Закрыть" : "➕ Добавить работника"}
        </button>
      </div>
      {selectedItem ? (
        <EditForm item={selectedItem} onChangeStatus={handleChangeStatus} />
      ) : (
        showAddForm && <AddForm onAddItem={handleAddItem} />
      )}
    </div>
  );
}
