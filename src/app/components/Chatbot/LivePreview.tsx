"use client";
import { useChatBot } from "@/context/chatbot";
import ChatBotInterface from "./ChatBotInterface";
import { Button } from "../ui/Button";

interface ConfigForDownload {
  configName: string;
  botName: string;
  fontFamily: string;
  headerColor: string;
  headerFontColor: string;
  backgroundColor: string;
  chatFontColor: string;
  avatarImage: string | null;
  launcherImage: string | null;
}

function LivePreview() {
  const { config } = useChatBot();

  const convertImageToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const downloadConfig = async () => {
    try {
      const configToDownload: ConfigForDownload = {
        ...config,
        avatarImage: null,
        launcherImage: null,
      };

      if (config.avatarImage) {
        configToDownload.avatarImage = await convertImageToBase64(
          config.avatarImage
        );
      }
      if (config.launcherImage) {
        configToDownload.launcherImage = await convertImageToBase64(
          config.launcherImage
        );
      }

      const blob = new Blob([JSON.stringify(configToDownload, null, 2)], {
        type: "application/json",
      });

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${config.configName || "chatbot-config"}.json`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading config:", error);
    }
  };

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
        <Button onClick={downloadConfig}>Download Config</Button>
        <span className="text-gray-500 text-sm">
          {config.configName ? `${config.configName}.json` : ""}
        </span>
      </div>
    </div>
  );
}

export default LivePreview;
