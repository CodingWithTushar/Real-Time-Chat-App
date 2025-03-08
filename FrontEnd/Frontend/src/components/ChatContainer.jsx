import React, { useEffect } from "react";
import { useChat } from "../hooks/useChat";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import ChatHeader from "./ChatHeader";
import MessagesInput from "./MessagesInput";

const ChatContainer = () => {
  const { messages, getMessages, isMessagesLoading, selectedUser } = useChat();

  useEffect(() => {
    getMessages(selectedUser._id);
  }, [selectedUser._id, getMessages]);

  if (isMessagesLoading) {
    return <>
    <ChatHeader/>
     <ArrowPathIcon className="w-9" />;
    <MessagesInput/>
    </> 
  }

  return (
    <>
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader/>
        <p>Messages...</p>
        <MessagesInput/>
        </div>;
    </>
  );
};

export default ChatContainer;
