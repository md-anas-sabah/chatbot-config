/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-img-element */
import { X, Mic } from "lucide-react";
import Image from "next/image";
import chat from "@/assets/chat.avif";
import bot from "@/assets/bot.webp";
import { useChatBot } from "@/context/chatbot";
import { useState } from "react";

declare global {
  interface Window {
    webkitSpeechRecognition: new () => SpeechRecognition;
  }
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  onstart: (event: Event) => void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: SpeechRecognitionError) => void;
  onend: () => void;
  start: () => void;
}

interface SpeechRecognitionEvent {
  results: {
    [key: number]: {
      [key: number]: {
        transcript: string;
      };
    };
  };
}

interface SpeechRecognitionError extends Event {
  error: string;
}

function ChatBotInterface() {
  const { config } = useChatBot();
  const [inputText, setInputText] = useState("");
  const [isListening, setIsListening] = useState(false);

  const selectedFont = config.fontFamily || "Inter";

  const startListening = () => {
    if ("webkitSpeechRecognition" in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      alert("Speech recognition is not supported in your browser.");
    }
  };

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
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <Mic
            className={`w-4 h-4 cursor-pointer ${
              isListening ? "text-red-500" : "text-gray-400"
            }`}
            onClick={startListening}
          />
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
