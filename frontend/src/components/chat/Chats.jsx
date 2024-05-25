import toast from "react-hot-toast";
import React, { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { TiMessages } from "react-icons/ti";
import { IoCallOutline, IoSearch } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import useConversation from "../../zustand/useConversation";
import Messages from "./messages/Messages";
import { useSocketContext } from "../../context/SocketContext";
import MessageInput from "./messageInput/MessageInput";

const Chats = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(selectedConversation?._id);

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  const handleClickSoon = () => {
    return toast.error("This feature is not available yet. Coming soon!");
  };

  return (
    <div className={`chats rightSide ${selectedConversation ? "dshow": "dnone"}`}>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="chat-header">
            <div className="info">
              <div className="img">
                <img src={selectedConversation.profilePic} alt="" />
              </div>
              <div className="details">
                <h3>{selectedConversation.fullName}</h3>
                <p className={`${isOnline ? "show" : "none"}`}>Online</p>
              </div>
            </div>
            <div className="icons">
              <IoCallOutline onClick={handleClickSoon} />
              <IoSearch onClick={handleClickSoon} />
              <CiMenuKebab onClick={handleClickSoon} />
              <IoMdClose onClick={()=>setSelectedConversation(null)}/>
            </div>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default Chats;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="noselectchat">
      <div className="">
        <p>
          Welcome <span>👋</span> {authUser.fullName}
        </p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="icon" />
      </div>
    </div>
  );
};
