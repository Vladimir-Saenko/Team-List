import ItemList from "./ItemList";

export default function TeamList({ teamList }) {
  return (
    <ul className="team-list">
      {teamList.map((item) => (
        <ItemList item={item} key={item.tabNo} />
      ))}
    </ul>
  );
}
