import React from "react";
import UserInfo from "./userInfo/UserInfo";
import SearchBar from "./searchBar/SearchBar";
import ChatList from "./chatList/ChatList";
import useConversation from "../../zustand/useConversation";

const SideBar = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  return (
    <div className={`sideBar  ${selectedConversation ? "dnone": "dshow"}`}>
      <UserInfo />
      <SearchBar />
      <ChatList />
    </div>
  );
};

export default SideBar;
