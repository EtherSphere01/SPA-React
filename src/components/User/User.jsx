import React, { Suspense, useState } from "react";
import { Link, Navigate, useLocation } from "react-router";
import UserDetails2 from "../UserDetails2/UserDetails2";
import { useFormState } from "react-dom";

const User = ({ user }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [visitHome, setVisitHome] = useState(false);

  const location = useLocation();

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

  if (visitHome) {
    return <Navigate to="/" replace={true}></Navigate>;
  }
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

      <button onClick={() => setVisitHome(true)}>Visit Home</button>
    </div>
  );
};

export default User;
