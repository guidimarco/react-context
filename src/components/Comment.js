import React from "react";

export default function Comment({username, isAdmin}) {

  // const {username, isAdmin} = useContext(UserInfoContext);

  return (
    <div>
      <h3>Comment</h3>
      <p>Logged in as {username}</p>
      {isAdmin && <button>Edit Comment</button>}
    </div>
  );
}