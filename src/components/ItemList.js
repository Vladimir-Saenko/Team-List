export default function ItemList({ item }) {
  const name = `${item.firstName} ${item.middleName} ${item.lastName}`;
  return (
    <li>
      <h5>{name}</h5>
      <p>{item.tabNo}</p>
      <p>{item.status}</p>
      <button className="list-button">📝</button>
    </li>
  );
}
