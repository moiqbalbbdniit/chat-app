"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);
  const { isSignedIn } = useUser();

  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 w-full shadow-lg z-50">

      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          Chat App by Iqbal
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-white" size={28} /> : <Menu className="text-white" size={28} />}
        </button>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-300">Home</Link>
          <Link href="/forums" className="hover:text-blue-300">Forums</Link>
          <Link href="/chats" className="hover:text-blue-300">Chat</Link>
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Link href="/sign-in" className="bg-blue-500 px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-gray-800 text-center transition-all duration-300 ease-in-out 
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}`}>
        <Link href="/" className="block py-4 border-b border-gray-700 hover:text-blue-300" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="/forums" className="block py-4 border-b border-gray-700 hover:text-blue-300" onClick={() => setIsOpen(false)}>Forums</Link>
        <Link href="/chats" className="block py-4 border-b border-gray-700 hover:text-blue-300" onClick={() => setIsOpen(false)}>Chat</Link>
        {isSignedIn ? (
          <div className="py-4">
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <Link href="/sign-in" className="block py-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition mx-6" onClick={() => setIsOpen(false)}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
