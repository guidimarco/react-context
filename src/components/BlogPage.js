import React, { useContext } from "react";
import Post from "./Post";
import UserInfoContext from "../contexts/UserInfoContext";
import ThemeContext from "../contexts/ThemeContext";

export default function BlogPage() {
  const userInfo = useContext(UserInfoContext);
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div>
      Current theme: {theme}
      <button onClick={toggleTheme}>ToggleTheme</button>
      <h1>Blog</h1>
      <Post username={userInfo.username} ></Post>
    </div>
  )
}