function UserList({ users, handleSelectUser }) {
  return (
    <div className="user-list">
      <h2>Select a User to Login</h2>
      <select onChange={(e) => handleSelectUser(e.target.value)}>
        <option value="">--Select User--</option>
        {users.map(({ _id, name }) => (
          <option key={_id} value={_id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserList;
