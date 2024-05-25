import React from "react";
import "./home.css";
import Chats from "../../components/chat/Chats";
import Rightsite from "../../components/rightsite/Rightsite";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <Rightsite />
        <Chats />
      </div>
    </>
  );
};

export default Home;
