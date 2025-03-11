import React, { useEffect } from "react";
import { useChat } from "../hooks/useChat";
import { ArrowPathIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ChatHeader from "./ChatHeader";
import MessagesInput from "./MessagesInput";
import { useAuth } from "../hooks/useAuth";

const ChatContainer = () => {
  const { messages, getMessages, isMessagesLoading, selectedUser } = useChat();
  const { authUser } = useAuth();

  useEffect(() => {
    getMessages(selectedUser._id);
  }, [selectedUser._id, getMessages]);

  if (isMessagesLoading) {
    return (
      <>
        <ChatHeader />
        <ArrowPathIcon className="w-9" />;
        <MessagesInput />
      </>
    );
  }

  return (
    <>
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message._id}
              className={`chat ${
                message.senderId === authUser._id ? "chat-end" : "chat-start"
              }`}
            >
              <div className="chat-image avatar">
                <div className="size-10 rounded-full border">
                  <img
                    src={
                      message.senderId === authUser._id
                        ? authUser.profilePic || "avatar.png"
                        : selectedUser.profilePic || "avatar.png"
                    }
                    alt="Profile Picture"
                  />
                </div>
              </div>
              <div className="chat-header mb-1">
                <time className="text-xs  opacity-35 ml-1">
                  {message.createdAt}
                </time>
              </div>
              <div className="chat-bubble flex items-center ">
                {message.image && (
                  <img
                    src={message.image}
                    alt="Attachments"
                    className="sm:max-w-50 mb-1"
                  />
                )}
                {message.text && <p>{message.text}</p>}
              </div>
            </div>
          ))}
        </div>
        <MessagesInput />
      </div>
    </>
  );
};

export default ChatContainer;
