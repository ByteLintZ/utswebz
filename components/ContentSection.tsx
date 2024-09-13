"use client"

import React, {  useEffect } from "react";
import Image from "next/image";

const ContentSection = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);


  return (
    <section className="contentSection py-20 bg-slate-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
  
        {/* First Content Block */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between mb-20">
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-9">
              Chats for your distributed teams
            </h2>
            <p className="mt-4 text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-9 font-semibold">
              Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.
            </p>
            <a href="#" className="mt-4 text-xl lg:text-2xl inline-block text-blue-600 dark:text-blue-400 hover:underline font-semibold">
              Learn more →
            </a>
          </div>
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <Image
              src="/Content.png"
              alt="Feature Image"
              width={500}
              height={300}
              className="h-auto"
            />
          </div>
        </div>

        {/* Second Content Block */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20">
          <div className="lg:w-1/2">
            <Image
              src="/p1.png"
              alt="Feature Image"
              width={500}
              height={300}
              className="h-auto"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-9">
              Chats for your distributed teams
            </h2>
            <p className="mt-4 text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-9 font-semibold">
              Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.
            </p>
            <a href="#" className="mt-4 text-xl lg:text-2xl inline-block text-blue-600 dark:text-blue-400 hover:underline font-semibold">
              Learn more →
            </a>
          </div>
        </div>

        {/* Third Content Block */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between mb-20">
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-9 pr-24">
              Choose how you want to work
            </h2>
            <p className="mt-4 text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-9 font-semibold pr-36">
              In Team, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live.
            </p>
            <a href="#" className="mt-4 text-xl lg:text-2xl inline-block text-blue-600 dark:text-blue-400 hover:underline font-semibold">
              Learn more →
            </a>
          </div>
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <Image
              src="/p2.png"
              alt="Feature Image"
              width={500}
              height={300}
              className="h-auto"
            />
          </div>
        </div>

        {/* Fourth Content Block */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20">
          <div className="lg:w-1/2">
            <Image
              src="/p3.png"
              alt="Feature Image"
              width={500}
              height={300}
              className="h-auto"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-9">
              Move faster with your Team tools
            </h2>
            <p className="mt-4 text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-9 font-semibold">
              With your other work apps connected to Team, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks.
            </p>
            <a href="#" className="mt-4 text-xl lg:text-2xl inline-block text-blue-600 dark:text-blue-400 hover:underline font-semibold">
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
