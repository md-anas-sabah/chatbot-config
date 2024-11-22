import ChatBotConfig from "./components/ChatbotConfig/ChatBotConfig";
import LivePreview from "./components/Chatbot/LivePreview";
import { ChatBotProvider } from "@/context/chatbot";

export default function Home() {
  return (
    <ChatBotProvider>
      <div className="h-screen w-full ml-auto mr-auto flex flex-row">
        <div className="flex-1">
          <ChatBotConfig />
        </div>
        <div className="flex-1 shadow-[-10px_0_10px_-3px_rgba(0,0,0,0.3)]">
          <LivePreview />
        </div>
      </div>
    </ChatBotProvider>
  );
}
