import React from "react";
import "./home.css";
import Chats from "../../components/chat/Chats";
import SideBar from "../../components/sideBar/SideBar";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <SideBar />
        <Chats />
      </div>
    </>
  );
};

export default Home;
