import React, { useEffect, useRef } from "react";

import "./messages.css";

import useGetMessages from "../../../hooks/useGetMessages";
import useListenMessages from "../../../hooks/useListenMessages";
import Message from "./message/Message";
import MessageSkeleton from "./skeletons/MessageSkeleton";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="messages">
      {messages.map((message) => (
        <div key={message._id} ref={lastMessageRef} className="">
          <Message message={message} />
        </div>
      ))}
      
      {loading && [...Array(2)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
