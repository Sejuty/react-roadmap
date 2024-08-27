import "./App.css";
// import CustomHook from "./customHook";
import { Layout } from "./reactRouter6/layout";
import { Routes, Route } from "react-router-dom";
import { Home, Users, NoMatch, User } from "./reactRouter6";
// import UseCallback from "./useCallback";
// import UseMemo from "./useMemo";

const users = [
  { id: "1", fullName: "Robin Wieruch" },
  { id: "2", fullName: "Sarah Finnley" },
];

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users users={users}/>} >
            <Route path=":userId" element={<User/>}/>
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
