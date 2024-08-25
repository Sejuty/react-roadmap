// import { useEffect } from "react";
// import { useState } from "react";
import { useMemo } from "react";

// const List = ({ getItems }) => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     setItems(getItems());
//     console.log("Updating Items");
//   }, [getItems]);

//   return items.map((item, index) => <div key={index}>{item}</div>);
// };

// export default List;

// if we don't pass onRemove in dependencies, the useCallback for onRemove is not necessary
const List = ({ list, onRemove }) => {
  const memoizedList = useMemo(() => {
    console.log("Render: List");
    return (
      <ul>
        {list.map((item) => (
          <ListItem key={item.id} item={item} onRemove={onRemove} />
        ))}
      </ul>
    );
  }, [list, onRemove]);

  return memoizedList;
};

export default List;

export const ListItem = ({ item, onRemove }) => {
  const listItem = useMemo(() => {
    console.log("Render: ListItem");
    return (
      <li>
        {item.name}
        <button type="button" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </li>
    );
  }, [item, onRemove]);

  return listItem;
};
