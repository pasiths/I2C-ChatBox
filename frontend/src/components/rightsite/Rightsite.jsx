import React from "react";
import useConversation from "../../zustand/useConversation";
import Userinfo from "./userinfo/Userinfo";
import Searchbar from "./searchbar/Searchbar";
import Chatlist from "./chatlist/Chatlist";

const Rightsite = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  return (
    <div className={`sideBar  ${selectedConversation ? "dnone" : "dshow"}`}>
      <Userinfo />
      <Searchbar />
      <Chatlist />
    </div>
  );
};

export default Rightsite;
