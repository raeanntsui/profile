"use client";
import React, { useState } from "react";
import LikeButton from "../likeButton";

interface User {
  id: number;
  name: string;
}

const UsersPage = () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const users: User[] = await res.json();
  return (
    <>
      <h1 className="menu">Users</h1>
      {/* <p>Time of rerender:{new Date().toLocaleTimeString()}</p> */}
      {/* <table>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </table> */}
      {/* <LikeButton /> */}
    </>
  );
};

export default UsersPage;
