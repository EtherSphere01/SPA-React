import React from "react";
import { useLoaderData } from "react-router";
import User from "../User/User";

const Users = () => {
  const user = useLoaderData();
  console.log(user);
  return (
    <div>
      <h2>this is users page</h2>

      <div>
        {user.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
