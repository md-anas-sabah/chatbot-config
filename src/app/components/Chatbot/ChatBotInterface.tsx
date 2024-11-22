/* eslint-disable @next/next/no-img-element */
import { X, Mic } from "lucide-react";
import Image from "next/image";
import mainLogo from "@/assets/mainlogo.png";

function ChatBotInterface() {
  return (
    <div className="relative">
      <div className="w-[300px] bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#E63A1E] p-3 flex justify-between items-center text-white">
          <span>Greebo</span>
          <X className="w-4 h-4 cursor-pointer" />
        </div>

        <div className="p-3 min-h-[200px] flex gap-3">
          <img
            src="/api/placeholder/32/32"
            alt="Avatar"
            className="w-8 h-8 rounded-full"
          />
          <p className="text-gray-700 text-sm">
            Hi! I&apos;m Greebo, your friendly concierge monster, here to answer
            questions, show you around, and automatically perform tasks on the
            site for you. How can I help?
          </p>
        </div>

        <div className="border-t p-3 flex items-center gap-2">
          <input
            type="text"
            placeholder="Need help? Just type or say it"
            className="flex-1 text-gray-500 focus:outline-none text-sm"
          />
          <Mic className="w-4 h-4 text-gray-400 cursor-pointer" />
        </div>
      </div>

      <div className="absolute -bottom-12 right-4">
        <Image
          src={mainLogo}
          alt="Launcher"
          width={40}
          height={40}
          className="rounded-lg shadow-lg cursor-pointer"
        />
      </div>
    </div>
  );
}

export default ChatBotInterface;
