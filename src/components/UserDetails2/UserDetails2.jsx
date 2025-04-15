import React, { use } from "react";

const UserDetails2 = ({ usersPromise }) => {
  const userInfo = use(usersPromise);
  const { name, username } = userInfo;
  return (
    <div>
      <p>{name}</p>
      <p>{username}</p>
    </div>
  );
};

export default UserDetails2;
