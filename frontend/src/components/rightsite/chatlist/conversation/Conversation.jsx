import React from "react";
import useConversation from "../../../../zustand/useConversation";
import { useSocketContext } from "../../../../context/SocketContext";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`block ${isSelected ? "active" : ""}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`imgbx ${isOnline ? "online" : ""}`}>
          <img src={conversation.profilePic} className="cover" />
        </div>
        <div className="details">
          <div className="listHead">
            <h4>{conversation.fullName}</h4>
            <p className="time none">10:45</p>
          </div>
          <div className="message_p">
            <p className="none">
              How to make Whatsapp clone using html and css, Lorem ipsum dolor
              sit amet.
            </p>
            <b className="none"></b>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
