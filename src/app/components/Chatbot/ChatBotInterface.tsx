/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-img-element */
import { X, Mic } from "lucide-react";
import Image from "next/image";
import chat from "@/assets/chat.avif";
import bot from "@/assets/bot.webp";
import { useChatBot } from "@/context/chatbot";

function ChatBotInterface() {
  const { config } = useChatBot();

  const selectedFont = config.fontFamily || "Inter";

  return (
    <div className="relative">
      <div
        className="w-[300px] rounded-lg shadow-lg overflow-hidden"
        style={{ backgroundColor: config.backgroundColor }}
      >
        <div
          className="p-3 flex justify-between items-center text-white"
          style={{
            backgroundColor: config.headerColor,
            color: config.headerFontColor,
            fontFamily: selectedFont,
          }}
        >
          <span>{config.botName || "Greebo"}</span>
          <X className="w-4 h-4 cursor-pointer" />
        </div>

        <div className="p-3 min-h-[200px] flex gap-3">
          {config.avatarImage ? (
            <img
              src={URL.createObjectURL(config.avatarImage)}
              alt="Avatar"
              className="w-8 h-8 rounded-full object-contain"
            />
          ) : (
            <Image
              src={chat}
              alt="avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
          )}
          <p
            className="text-sm"
            style={{
              fontFamily: selectedFont,
              color: config.chatFontColor,
            }}
          >
            Hi! I&apos;m {config.botName || "Greebo"}, your friendly concierge
            monster, here to answer questions, show you around, and
            automatically perform tasks on the site for you. How can I help?
          </p>
        </div>

        <div className="border-t p-3 flex items-center gap-2">
          <input
            type="text"
            placeholder="Need help? Just type or say it"
            className="flex-1 focus:outline-none text-sm p-1 rounded-sm border-none"
            // style={{
            //   fontFamily: selectedFont,
            //   color: config.chatFontColor,
            // }}
          />
          <Mic className="w-4 h-4 text-gray-400 cursor-pointer" />
        </div>
      </div>

      <div className="absolute -bottom-[42px] right-0  object-fill">
        {config.launcherImage ? (
          <img
            src={URL.createObjectURL(config.launcherImage)}
            alt="Launcher"
            className="w-10 h-10 rounded-lg shadow-lg cursor-pointer object-cover"
          />
        ) : (
          <Image
            src={bot}
            alt="Launcher"
            width={50}
            height={40}
            className="rounded-lg shadow-lg cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}

export default ChatBotInterface;
