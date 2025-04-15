import React from "react";
import { Link, useNavigate } from "react-router";

const Post = ({ post }) => {
  const { title, id } = post;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/posts/${id}`);
  };
  return (
    <div
      style={{ border: "1px solid yellow", margin: "10px", padding: "10px" }}
    >
      <h3>{title}</h3>
      <Link to={`/posts/${id}`}>
        <button>Show details</button>
      </Link>

      <button onClick={() => handleNavigate()}>Details of: {id}</button>
    </div>
  );
};

export default Post;
