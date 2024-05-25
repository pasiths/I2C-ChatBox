import React, { useState } from "react";
import useGetConversations from "../../../hooks/useGetConversations";
import useSearch from "../../../zustand/useSearch";
import Conversation from "./conversation/Conversation";

const Chatlist = () => {
  const { loading, conversations } = useGetConversations();
  const { search, matchingConversations } = useSearch();

  const conversationsToRender =
    search?.length >= 0 ? matchingConversations : conversations;
  return (
    <div className="chatList flex flex-col">
      {conversationsToRender?.length > 0
        ? conversationsToRender.map((conversation, idx) => (
            <Conversation
              key={conversation._id}
              conversation={conversation}
              lastIdx={idx === conversation.length - 1}
            />
          ))
        : !loading && (
            <p className="text-center text-gray-aaa">No conversations found</p>
          )}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Chatlist;
