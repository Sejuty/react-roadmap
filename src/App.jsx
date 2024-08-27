import "./App.css";
// import CustomHook from "./customHook";
import { Layout } from "./reactRouter6/layout";
import { Routes, Route } from "react-router-dom";
import { Home, Users, NoMatch, User, Profile, Account } from "./reactRouter6";
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
          {/* asterisk (*) means this route and its component render descendant routes */}
          <Route path="users/*" element={<Users users={users} />} />
          {/* <Route path="user" element={<User />}>
            <Route index element={<Profile />} />
            <Route path="profile" element={<Profile />} />
            <Route path="account" element={<Account />} />
            <Route path="*" element={<NoMatch />} />
          </Route> */}

          {/* <Route path="users/:userId" element={<User />} /> */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
