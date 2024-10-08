import {
  Link,
  Outlet,
  Route,
  Routes,
  useParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const users = [
  { id: "1", fullName: "Robin Wieruch" },
  { id: "2", fullName: "Sarah Finnley" },
];

export const Home = () => {
  return (
    <>
      <h2>Home</h2>
    </>
  );
};

export const Users = ({ users }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("name") || "";

  const handleSearch = (event) => {
    const name = event.target.value;

    if (name) {
      setSearchParams({ name: event.target.value });
    } else {
      setSearchParams({});
    }
  };
  return (
    <>
      <h2>Users</h2>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      {/* <Routes>
        <Route
          index
          element={
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  <Link to={`/users/${user.id}`}>{user.fullName}</Link>
                </li>
              ))}
            </ul>
          }
        />
        <Route path=":userId" element={<User />} />
      </Routes> */}
      <ul>
        {users
          .filter((user) =>
            user.fullName.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          )
          .map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.fullName}</Link>
            </li>
          ))}
      </ul>

      <Outlet />
    </>
  );
};

export const User = ({ onRemoveUser }) => {
  const { userId } = useParams();
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <>
      {/* <nav>
        <Link to="profile">Profile</Link>
        <Link to="account">Account</Link>
      </nav>
      <Outlet/> */}
      <button type="button" onClick={() => onRemoveUser(userId)}>
        Remove
      </button>
      <h1>{userId}</h1>
      <div>{user.fullName}</div>
      <Link to="/users">Back to users</Link>
    </>
  );
};

export const Profile = () => {
  return (
    <>
      <h2>Profile</h2>
    </>
  );
};
export const Account = () => {
  return (
    <>
      <h2>Account</h2>
    </>
  );
};

export const NoMatch = () => {
  return <p>Theres nothing here: 404!</p>;
};
