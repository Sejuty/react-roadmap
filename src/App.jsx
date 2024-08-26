import "./App.css";
// import CustomHook from "./customHook";
import { Layout } from "./reactRouter6/layout";
import { Routes, Route } from "react-router-dom";
import { Home, Users, NoMatch } from "./reactRouter6";
// import UseCallback from "./useCallback";
// import UseMemo from "./useMemo";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route index path="users" element={<Users />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
