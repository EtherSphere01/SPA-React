import React from "react";
import { Link } from "react-router";

const Post = ({ post }) => {
  const { title, id } = post;
  return (
    <div
      style={{ border: "1px solid yellow", margin: "10px", padding: "10px" }}
    >
      <h3>{title}</h3>
      <Link to={`/posts/${id}`}>
        <button>Show details</button>
      </Link>
    </div>
  );
};

export default Post;
