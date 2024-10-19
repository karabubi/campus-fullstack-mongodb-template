import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ setLoggedInUser }) {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const API_LINK = import.meta.env.VITE_API_LINK;

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(`${API_LINK}/users`);
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find((u) => u.name === selectedUser);
    if (user) {
      setLoggedInUser(user);
      navigate("/notes");
    } else {
      alert("Please select a valid user");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <select
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        <option value="">Select User</option>
        {users.map((user) => (
          <option key={user.id} value={user.name}>
            {user.name}
          </option>
        ))}
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
