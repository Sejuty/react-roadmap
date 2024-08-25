import { useState } from "react";
import List from "./List";
import {v4 as uuidv4} from "uuid"

const UseCallback = () => {
  // useMemo Cache the value to getItems instead of the whole function.
  // But for useCallback , it memorize the whole function against getItems.
  //  Thats why useMemo gives an error but useCallback doesn't.
  // without useCallback , react fails to check referential equality because the function is not memorized.
  // const [number, setNumber] = useState(1);
  // const [dark, setDark] = useState(false);
  // const getItems = useCallback(() => {
  //   return [number, number + 1, number + 2];
  // }, [number]);

  // const theme = {
  //   backgroundColor: dark ? "#333" : "#FFF",
  //   color: dark ? "#FFF" : "#333",
  // };

  // return (
  //   <div>
  //     <div style={theme}>
  //       <input
  //         type="number"
  //         value={number}
  //         onChange={(e) => {
  //           const value = e.target.value;
  //           if (value === null) {
  //             setNumber(1);
  //           } else {
  //             setNumber(parseInt(value));
  //           }
  //         }}
  //       />
  //       <button onClick={() => setDark((prevDark) => !prevDark)}>
  //         Toggle Theme
  //       </button>
  //       <List getItems={getItems} />
  //     </div>
  //   </div>

  console.log("Render: App");
  const [users, setUsers] = useState([
    { id: "a", name: "Robin" },
    { id: "b", name: "Dennis" },
  ]);

  const [text, setText] = useState("");

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleAddUser = () => {
    setUsers(users.concat({ id: uuidv4(), name: text }));
  };

  const handleRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleAddUser}>
        Add User
      </button>

      <List list={users} onRemove={handleRemove} />
    </div>
  );
};

export default UseCallback;
