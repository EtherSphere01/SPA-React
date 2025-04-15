import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  const { id, name, email, phone } = user;
  const userStyle = {
    border: "1px solid yellow",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
  };
  return (
    <div style={userStyle}>
      <h1>userDetails here</h1>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
};

export default UserDetails;
