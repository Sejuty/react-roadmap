/* eslint-disable react/prop-types */
// import { useEffect } from "react";
// import { useState } from "react";

// const List = ({ getItems }) => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     setItems(getItems());
//     console.log("Updating Items");
//   }, [getItems]);

//   return items.map((item, index) => <div key={index}>{item}</div>);
// };

// export default List;
const List = ({ list, onRemove }) => {
  console.log("Render: List");
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default List;

// eslint-disable-next-line react/prop-types
export const ListItem = ({ item, onRemove }) => {
  console.log("Render: ListItem");
  return (
    <li>
      {item.name}
      <button type="button" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </li>
  );
};
