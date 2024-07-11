import React, { useContext } from "react";
import Comment from "./Comment";
import UserInfoContext from "../contexts/UserInfoContext";

export default function Post() {
  const {isAdmin} = useContext(UserInfoContext);

  return (
    <div>
      {isAdmin && <button>Delete</button>}

      <h2>Example Post Title</h2>
      <p>This is an example...</p>
      <Comment></Comment>
    </div>
  );
}