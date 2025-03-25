"use client";
import React, { useState, useEffect } from "react";
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageList,
  MessageInput,
  Window,
  Thread,
} from "stream-chat-react";
import { StreamChat } from "stream-chat";
import "stream-chat-react/dist/css/v2/index.css"; // Import Stream's styles

const ChatPage = ({ clerkUser }) => {
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
  const userId = clerkUser?.id;
  const userName = clerkUser?.name;
  const userToken = clerkUser?.token; // Must be generated on the backend

  // List of available users (Mock Data - Replace with API fetch)
  const users = [
    { id: "user1", name: "Alice" },
    { id: "user2", name: "Bob" },
    { id: "user3", name: "Charlie" },
  ];

  // State
  const [channel, setChannel] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  // Initialize Stream Chat Client
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: {
      id: userId,
      name: userName,
      image: `https://getstream.io/random_png/?name=${userName}`,
    },
  });

  // Function to start a direct chat
  const startChat = async (otherUser) => {
    if (!client) return;

    const newChannel = client.channel("messaging", {
      members: [userId, otherUser.id],
      name: `Chat with ${otherUser.name}`,
    });

    await newChannel.watch();
    setChannel(newChannel);
    setSelectedUser(otherUser);
  };

  // Show loading state if client isn't ready
  if (!client) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-900 text-gray-100">
        <p className="text-lg text-blue-400">Connecting to chat...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Left Sidebar - User List */}
      <div className="w-1/4 bg-gray-800 p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Users</h2>
        {users.map((user) => (
          <button
            key={user.id}
            className={`w-full p-3 mb-2 rounded-lg ${
              selectedUser?.id === user.id ? "bg-blue-500" : "bg-gray-700"
            }`}
            onClick={() => startChat(user)}
          >
            {user.name}
          </button>
        ))}
      </div>

      {/* Chat Section */}
      <div className="w-3/4 flex flex-col">
        {channel ? (
          <Chat client={client}>
            <div className="bg-gray-800 p-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">{selectedUser?.name}</h2>
              <p className="text-gray-400">Chatting with {selectedUser?.name}</p>
            </div>
            <Channel channel={channel}>
              <Window>
                <ChannelHeader />
                <MessageList />
                <MessageInput />
              </Window>
              <Thread />
            </Channel>
          </Chat>
        ) : (
          <div className="flex items-center justify-center flex-grow">
            <p className="text-gray-400">Select a user to start chatting.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
