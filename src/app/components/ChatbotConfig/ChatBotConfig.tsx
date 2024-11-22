/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "../ui/Button";
import ColorInput from "../ui/ColorInput";
import Dropdown from "../ui/Dropdown";
import Input from "../ui/Input";
import ImageUploader from "../ui/ImageUploader";
import { useChatBot } from "@/context/chatbot";
import { useRef } from "react";

function ChatBotConfig() {
  const { config, updateConfig, loadConfig, fontOptions } = useChatBot();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileLoad = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const loadedConfig = JSON.parse(text);

      if (loadedConfig.avatarImage) {
        const avatarFile = await base64ToFile(
          loadedConfig.avatarImage,
          "avatar-image"
        );
        loadedConfig.avatarImage = avatarFile;
      }
      if (loadedConfig.launcherImage) {
        const launcherFile = await base64ToFile(
          loadedConfig.launcherImage,
          "launcher-image"
        );
        loadedConfig.launcherImage = launcherFile;
      }

      Object.keys(loadedConfig).forEach((key) => {
        updateConfig(key as keyof typeof config, loadedConfig[key]);
      });
    } catch (error) {
      console.error("Error loading config:", error);
    }
  };

  const base64ToFile = async (
    base64String: string,
    filename: string
  ): Promise<File> => {
    const response = await fetch(base64String);
    const blob = await response.blob();
    return new File([blob], filename, { type: blob.type });
  };

  const handleLoadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="p-10 bg-[#F7F7F7] h-screen flex flex-col gap-1">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileLoad}
        accept=".json"
        className="hidden"
      />
      <Button className="h-8 w-28 -mt-4" onClick={handleLoadClick}>
        Load Config
      </Button>

      <Input
        label="Config Name"
        id="config-name"
        value={config.configName}
        onChange={(value) => updateConfig("configName", value)}
        placeholder="Enter config name"
      />

      <Input
        label="Bot Name"
        id="bot-name"
        value={config.botName}
        onChange={(value) => updateConfig("botName", value)}
        placeholder="Enter Bot Name"
      />

      <Dropdown
        label="Font Family"
        id="font-family"
        options={fontOptions}
        value={config.fontFamily}
        onChange={(value) => updateConfig("fontFamily", value)}
      />

      <ColorInput
        label="Header Color"
        id="header-color"
        value={config.headerColor}
        onChange={(value) => updateConfig("headerColor", value)}
        placeholder="Enter color name or hex"
      />

      <ColorInput
        label="Header Font Color"
        id="header-font-color"
        value={config.headerFontColor}
        onChange={(value) => updateConfig("headerFontColor", value)}
        placeholder="Enter color name or hex"
      />

      <ColorInput
        label="Background Color"
        id="background-color"
        value={config.backgroundColor}
        onChange={(value) => updateConfig("backgroundColor", value)}
        placeholder="Enter color name or hex"
      />

      <ColorInput
        label="Chat Font Color"
        id="chat-font-color"
        value={config.chatFontColor}
        onChange={(value) => updateConfig("chatFontColor", value)}
        placeholder="Enter color name or hex"
      />

      <ImageUploader
        label="Avatar Image"
        id="avatar-image"
        imageFile={config.avatarImage}
        onChange={(file) => updateConfig("avatarImage", file)}
      />

      <ImageUploader
        label="Launcher Image"
        id="launcher-image"
        imageFile={config.launcherImage}
        onChange={(file) => updateConfig("launcherImage", file)}
      />
    </div>
  );
}

export default ChatBotConfig;
