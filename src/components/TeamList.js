import ItemList from "./ItemList";

export default function TeamList({ teamList, onEditItem }) {
  return (
    <ul className="team-list">
      {teamList.map((item) => (
        <ItemList item={item} key={item.tabNo} onEditItem={onEditItem} />
      ))}
    </ul>
  );
}
