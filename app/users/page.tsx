"use client";
import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const users: User[] = await res.json();
  const [likes, setLikes] = React.useState(0);

  function addLikes() {
    setLikes(likes + 1);
    console.log("likes", likes);
  }

  return (
    <>
      <h1 className="menu">Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      {/* <table>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </table> */}
      <button className="btn btn-secondary" onClick={addLikes}>
        Likes {likes}
      </button>
    </>
  );
};

export default UsersPage;
