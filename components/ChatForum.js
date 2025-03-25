"use client";
import React, { useState, useEffect } from "react";
import "stream-chat-react/dist/css/v2/index.css";
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

const ChatForum = ({ clerkUser, slug }) => {
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
  const userId = clerkUser?.id;
  const userName = clerkUser?.name;
  const userToken = clerkUser?.token; 
  const formattedName = slug.replace(/-/g, " ").toUpperCase() + " Discussion";

  // 🔴 Hooks must be called at the top level of the component
  const [channel, setChannel] = useState(null);

  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken, 
    userData: {
      id: userId,
      name: userName,
      image: `https://getstream.io/random_png/?name=${userName}`,
    },
  });

  useEffect(() => {
    if (!client || !userId) return;

    const newChannel = client.channel("messaging", slug, {
      image: "https://getstream.io/random_png/?name=react",
      name: formattedName,
      members: [userId],
    });

    setChannel(newChannel);
    newChannel.addMembers([userId]).catch(console.error);
  }, [client, slug, userId, formattedName]);

  // ✅ Move condition AFTER hooks
  if (!userToken) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100">
        <p className="text-lg text-red-400">Error: Missing user token</p>
      </div>
    );
  }

  if (!client || !channel) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100">
        <p className="text-lg text-blue-400">Setting up chat client...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <Chat client={client}>
        <Channel channel={channel}>
          <Window>
            <div className="bg-gray-800 p-4 mt-12 text-white flex justify-between items-center">
              {/* You can add UI elements here */}
            </div>
            <div className="flex flex-col h-[80vh]">
              <ChannelHeader />
              <MessageList className="flex-grow overflow-auto" />
              <MessageInput />
            </div>
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </div>
  );
};

export default ChatForum;
