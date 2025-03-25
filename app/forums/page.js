import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const forumTopics = [
  { title: "JavaScript", slug: "javascript-new", description: "Discuss everything about JavaScript.", posts: 150 },
  { title: "Python", slug: "python-new", description: "Talk about Python, AI, and automation.", posts: 120 },
  { title: "ReactJS", slug: "reactjs-new", description: "Explore React and front-end development.", posts: 100 },
  { title: "Node.js", slug: "nodejs-new", description: "Backend development with Node.js.", posts: 80 },
  { title: "Java", slug: "java-new", description: "Java programming and enterprise applications.", posts: 90 },
  { title: "C++", slug: "cpp-new", description: "Game development and performance programming.", posts: 75 },
  { title: "CSS", slug: "css-new", description: "ui and ux.", posts: 75 },
];

export default function Forums() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8 pt-24">
      <h1 className="text-4xl font-bold text-blue-400 text-center">Programming Forums</h1>
      <p className="text-center text-gray-300 mt-2">Join discussions on various programming languages.</p>

      <div className="mt-6 max-w-3xl mx-auto space-y-6">
  {forumTopics.map((topic) => (
    <Link key={topic.slug} href={`/forum/${topic.slug}`} className="block">
      <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition cursor-pointer mb-6">
        <h2 className="text-2xl font-semibold text-blue-300">{topic.title}</h2>
        <p className="text-gray-300 mt-1">{topic.description}</p>
        <p className="text-gray-400 mt-2">{topic.posts} posts</p>
        <Button className="mt-3">Visit {topic.title} Forum</Button>
      </div>
    </Link>
  ))}
</div>


      <div className="mt-6 flex justify-center">
        <Link href="/chats">
          <Button className="px-6 py-3">Go to Chats</Button>
        </Link>
      </div>
    </div>
  );
}
