import { Link, Outlet, useParams } from "react-router-dom";

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
  return (
    <>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.fullName}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export const User = () => {
  const { userId } = useParams();
  const user = users.find(user => user.id === userId); 

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <>
      <h2>{user.fullName}</h2>
      <p>User ID: {user.id}</p>
      {/* Add more user details as needed */}
      <Link to="/users">Back to users</Link>
    </>
  );
};

export const NoMatch = () => {
  return <p>Theres nothing here: 404!</p>;
};
