import React from "react";
import { useLoaderData } from "react-router";

const PostDetails = () => {
  const post = useLoaderData();
  return (
    <div>
      <p>
        {post.id} : {post.title}
      </p>
    </div>
  );
};

export default PostDetails;
