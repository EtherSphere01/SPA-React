import React, { Suspense, useState } from "react";
import { Link } from "react-router";
import UserDetails2 from "../UserDetails2/UserDetails2";

const User = ({ user }) => {
  const [showInfo, setShowInfo] = useState(false);
  const usersPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${user.id}`
  ).then((res) => res.json());

  const { id, name, email, phone } = user;
  const userStyle = {
    border: "1px solid yellow",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
  };
  return (
    <div style={userStyle}>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{phone}</p>
      <Link to={`/users/${id}`}>Show Details</Link>
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Hide" : "Show"} Info
      </button>

      {showInfo && (
        <Suspense fallback={<span>Loading...</span>}>
          <UserDetails2 usersPromise={usersPromise}></UserDetails2>
        </Suspense>
      )}
    </div>
  );
};

export default User;
