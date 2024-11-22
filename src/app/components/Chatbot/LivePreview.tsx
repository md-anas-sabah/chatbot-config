/* eslint-disable @next/next/no-img-element */
"use client";

import { useChatBot } from "@/context/chatbot";
import { Button } from "../ui/Button";
import ChatBotInterface from "./ChatBotInterface";

function LivePreview() {
  const { config } = useChatBot();

  return (
    <div className="bg-[#EBE5E0] py-10 h-screen flex flex-col justify-between items-center">
      <div className="text-sm flex items-center gap-2 mb-10">
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <span className="font-bold">Live Preview</span>
      </div>
      <div className="mt-28">
        <ChatBotInterface />
      </div>
      <div className="mt-auto flex flex-col items-center gap-2">
        <Button className="">Download Config</Button>
        <span className="text-gray-500 text-sm">
          {config.configName ? `${config.configName}.json` : ""}
        </span>
      </div>
    </div>
  );
}

export default LivePreview;
