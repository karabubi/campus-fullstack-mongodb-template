import { useEffect, useState } from "react";
import UserList from "./components/UserList.jsx"; // Component for user login
import Notes from "./components/Notes.jsx"; // New Component for handling notes
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // Track selected user
  const API_LINK = import.meta.env.VITE_API_LINK;

  // Fetch users from backend
  async function fetchUsers() {
    const response = await fetch(`${API_LINK}/users`);
    const data = await response.json();
    setUsers(data);
  }

  // Handle user selection
  function handleSelectUser(userId) {
    setSelectedUser(userId); // Set the selected user ID
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="app">
      <h1>Note Taking App</h1>
      {/* User selection dropdown */}
      <UserList users={users} handleSelectUser={handleSelectUser} />

      {/* Display notes and note creation form only if a user is selected */}
      {selectedUser && <Notes userId={selectedUser} />}
    </div>
  );
}

export default App;
