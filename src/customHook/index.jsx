import { useBoolean } from "./useBoolean";
import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const CustomHook = () => {
  //   const [isToggle, { setToggle, setTrue, setFalse }] = useBoolean(true);

  //   return (
  //     <div>
  //       <button type="button" onClick={setToggle}>
  //         Toggle
  //       </button>
  //       <button type="button" onClick={setTrue}>
  //         To True
  //       </button>
  //       <button type="button" onClick={setFalse}>
  //         To False
  //       </button>

  //       {isToggle.toString()}
  //     </div>
  //   );

  const [name, setName] = useLocalStorage("name", "nishat");

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
};

export default CustomHook;
