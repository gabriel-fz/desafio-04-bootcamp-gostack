import React from "react";
import "./App.css";

import profile from "./assets/foto-uenf.png";
import Header from "./components/Header";
import PostList from "./components/PostList";

function App() {
  return (
    <>
      <Header />
      <PostList />
    </>
  );
}

export default App;
