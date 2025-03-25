"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  ShieldCheck,
  Users,
  Smartphone,
  Smile,
  Send,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Hero Section */}
      <header className="h-screen flex flex-col justify-center items-center text-center p-8 bg-gradient-to-b from-gray-900 to-gray-800 pt-30">
      <Image
          src="/chat-app.png"
          alt="Chat App Hero"
          width={200}
          height={200}
          className="mx-auto mb-6"
        />
        <h1 className="text-5xl font-extrabold text-blue-400">
          Seamless & Secure Chatting
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Stay connected with your loved ones anytime, anywhere.
        </p>
        <div className="mt-6 relative z-10 w-full flex justify-center">
  <Link href="/signup" className="px-4 py-2 bg-blue-500 text-white rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-600 transition transform hover:scale-105">
    Get Started for Free
  </Link>
</div>

      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-blue-400">
            Why Choose Chat App?
          </h2>
          <p className="mt-4 text-gray-300">
            The best features for an unbeatable chatting experience.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "Real-Time Chat",
                desc: "Instant messaging with zero lag.",
              },
              {
                icon: ShieldCheck,
                title: "End-to-End Encryption",
                desc: "Your messages are private and secure.",
              },
              {
                icon: Users,
                title: "Group Chats",
                desc: "Stay connected with friends and family in group chats.",
              },
              {
                icon: Smartphone,
                title: "Multi-Device Sync",
                desc: "Access your chats on mobile and desktop.",
              },
              {
                icon: Smile,
                title: "Emoji & Stickers",
                desc: "Express yourself with emojis and stickers.",
              },
              {
                icon: Send,
                title: "Fast & Reliable",
                desc: "Lightning-fast message delivery.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-700 rounded-lg shadow-md flex flex-col items-center text-center transform hover:scale-105 transition"
              >
                <feature.icon className="text-blue-400 mb-4" size={50} />
                <h3 className="text-2xl font-bold text-blue-400">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-blue-400">About Us</h2>
          <p className="mt-4 text-gray-300">
            Chat App by Iqbal is built with security and simplicity in mind,
            providing an effortless chatting experience.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-blue-400">Get in Touch</h2>
          <p className="mt-4 text-gray-300">
            Have questions? We’d love to hear from you.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="px-8 py-4 bg-blue-500 text-white rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-600 transition transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6">
        <p>&copy; 2025 Chat App by Iqbal. All rights reserved.</p>
      </footer>
    </div>
  );
}
