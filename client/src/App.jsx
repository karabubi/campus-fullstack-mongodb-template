// /client/src/App.jsx
import { useEffect, useState } from "react";
import UserList from "./components/UserList"; // Importing UserList component
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  // Fetch users from the backend
  async function fetchUsers() {
    const response = await fetch("http://localhost:3000/users");
    if (!response.ok) {
      console.warn("Response is not OK!");
    }
    const data = await response.json();
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to handle adding a new user
  async function handleUserOnClick() {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "John Doe",
        age: 29,
      }),
    });
    if (!response.ok) {
      console.warn("Response is not OK!");
    }
    fetchUsers(); // Refresh user list
  }

  // Function to handle deleting a user
  async function handleDelete(userId) {
    const response = await fetch(`http://localhost:3000/users/${userId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      console.warn("Failed to delete user");
    }
    fetchUsers(); // Refresh user list after deletion
  }

  return (
    <div>
      <UserList users={users} handleDelete={handleDelete} />
      <button onClick={handleUserOnClick}>Add User</button>
    </div>
  );
}

export default App;
