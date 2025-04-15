import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <p>
        {post.id} : {post.title}
      </p>
      <button onClick={() => handleBack()}>Go back</button>
    </div>
  );
};

export default PostDetails;
