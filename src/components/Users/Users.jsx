import React from "react";
import { useLoaderData } from "react-router";

const Users = () => {
  const user = useLoaderData();
  console.log(user);
  return (
    <div>
      <h2>this is users page</h2>
    </div>
  );
};

export default Users;
