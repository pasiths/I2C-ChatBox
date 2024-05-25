import React, { useEffect, useRef, useState } from "react";
import EmojiPicker, { Emoji } from "emoji-picker-react";
import { GrAttachment } from "react-icons/gr";
import { FaMicrophone } from "react-icons/fa";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";
import { MdSend } from "react-icons/md";
import toast from "react-hot-toast";
import useSendMessage from "../../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  const handleEmoji = (e) => {
    setMessage((prev) => prev + e.emoji);
    setOpen(false);
    inputRef.current.focus();
  };

  const handleClickSoon = () => {
    return toast.error("This feature is not available yet. Coming soon!");
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <form onSubmit={handleSubmit} className="messageInput chatbox_input">
      <div className="icon emoji">
        <BsEmojiSmileUpsideDown onClick={() => setOpen((prev) => !prev)} />
        <div className="picker">
          <EmojiPicker open={open} onEmojiClick={handleEmoji} />
        </div>
      </div>
      <div className="icon">
        <GrAttachment onClick={handleClickSoon} />
      </div>
      <input
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        ref={inputRef}
      />
      <div className="icon">
        {loading ? (
          <div className="loading loading-spinner"> </div>
        ) : message ? (
          <MdSend onClick={handleSubmit} />
        ) : (
          <FaMicrophone onClick={handleClickSoon} />
        )}
      </div>
    </form>
  );
};

export default MessageInput;
