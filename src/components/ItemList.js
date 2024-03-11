export default function ItemList({ item, onEditItem, onDeleteItem }) {
  const name = `${item.firstName} ${item.middleName} ${item.lastName}`;
  return (
    <li>
      <h5>{name}</h5>
      <p>{item.tabNo}</p>
      <p>{item.status}</p>
      <button className="list-button" onClick={() => onEditItem(item)}>
        📝
      </button>
      <button className="list-button" onClick={() => onDeleteItem(item)}>
        ❌ Удалить
      </button>
    </li>
  );
}
