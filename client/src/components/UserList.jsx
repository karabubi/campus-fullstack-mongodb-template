// /client/src/components/UserList.jsx
import React from "react";

function UserList({ users, handleDelete }) {
  return (
    <div>
      {users.map(({ _id, name, age }) => (
        <div key={_id}>
          <p>
            {name} ({age}){" "}
            <button onClick={() => handleDelete(_id)}>Delete</button>
          </p>
        </div>
      ))}
    </div>
  );
}

export default UserList;
