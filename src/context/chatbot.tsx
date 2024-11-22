/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

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
  fontOptions: Array<{ value: string; label: string; fontFamily: string }>;
}

const defaultConfig: ChatBotConfig = {
  configName: "",
  botName: "",
  fontFamily: "Inter",
  headerColor: "#E63A1E",
  headerFontColor: "#FFFFFF",
  backgroundColor: "#FFFFFF",
  chatFontColor: "#000000",
  avatarImage: null,
  launcherImage: null,
};

const ChatBotContext = createContext<ChatBotContextType | undefined>(undefined);

export function ChatBotProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<ChatBotConfig>(defaultConfig);

  const fontOptions = [
    { value: "inter", label: "Inter", fontFamily: "var(--font-inter)" },
    { value: "roboto", label: "Roboto", fontFamily: "var(--font-roboto)" },
    {
      value: "openSans",
      label: "Open Sans",
      fontFamily: "var(--font-open-sans)",
    },
    { value: "poppins", label: "Poppins", fontFamily: "var(--font-poppins)" },
    { value: "lato", label: "Lato", fontFamily: "var(--font-lato)" },
    {
      value: "montserrat",
      label: "Montserrat",
      fontFamily: "var(--font-montserrat)",
    },
  ];

  const updateConfig = (field: keyof ChatBotConfig, value: any) => {
    setConfig((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const loadConfig = async () => {
    try {
      const testConfig = {
        configName: "Test Config",
        botName: "Test Bot",
        fontFamily: "poppins",
        headerColor: "#FF0000",
        headerFontColor: "#FFFFFF",
        backgroundColor: "#F0F0F0",
        chatFontColor: "#333333",
        avatarImage: null,
        launcherImage: null,
      };
      setConfig(testConfig);
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
