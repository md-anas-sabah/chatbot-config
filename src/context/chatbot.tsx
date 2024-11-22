"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState, ReactNode } from "react";

interface ChatBotConfig {
  configName: string;
  botName: string;
  fontFamily: string;
  headerColor: string;
  headerFontColor: string;
  backgroundColor: string;
  chatFontColor: string;
  avatarImage: File | null;
  launcherImage: File | null;
}

interface ChatBotContextType {
  config: ChatBotConfig;
  updateConfig: (field: keyof ChatBotConfig, value: any) => void;
  loadConfig: () => void;
  fontOptions: Array<{ value: string; label: string }>;
}

const defaultConfig: ChatBotConfig = {
  configName: "",
  botName: "",
  fontFamily: "",
  headerColor: "#E63A1E",
  headerFontColor: "#FFFFFF",
  backgroundColor: "#F7F7F7",
  chatFontColor: "#000000",
  avatarImage: null,
  launcherImage: null,
};

const ChatBotContext = createContext<ChatBotContextType | undefined>(undefined);

export function ChatBotProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<ChatBotConfig>(defaultConfig);

  const fontOptions = [
    { value: "arial", label: "Arial" },
    { value: "roboto", label: "Roboto" },
    { value: "helvetica", label: "Helvetica" },
    { value: "openSans", label: "Open Sans" },
  ];

  const updateConfig = (field: keyof ChatBotConfig, value: any) => {
    setConfig((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const loadConfig = async () => {
    try {
      // Implement your config loading logic here
      // Example:
      // const response = await fetch('/api/config');
      // const loadedConfig = await response.json();
      // setConfig(loadedConfig);
    } catch (error) {
      console.error("Error loading config:", error);
    }
  };

  return (
    <ChatBotContext.Provider
      value={{
        config,
        updateConfig,
        loadConfig,
        fontOptions,
      }}
    >
      {children}
    </ChatBotContext.Provider>
  );
}

export function useChatBot() {
  const context = useContext(ChatBotContext);
  if (context === undefined) {
    throw new Error("useChatBot must be used within a ChatBotProvider");
  }
  return context;
}
