// "use client";

// import { useState } from "react";
// import { Button } from "../ui/Button";
// import ColorInput from "../ui/ColorInput";
// import Dropdown from "../ui/Dropdown";
// import Input from "../ui/Input";
// import ImageUploader from "../ui/ImageUploader";

// function ChatBotConfig() {
//   const [color, setColor] = useState("#E63A1E");
//   const [avatarImage, setAvatarImage] = useState<File | null>(null);
//   const [launcherImage, setLauncherImage] = useState<File | null>(null);

//   const options = [
//     { value: "option1", label: "Option 1" },
//     { value: "option2", label: "Option 2" },
//   ];
//   return (
//     <div className="p-10 bg-[#F7F7F7] h-screen flex flex-col gap-2">
//       <Button className="h-8 w-28">Load Config</Button>
//       <Input
//         label="Config Name"
//         id="config-name"
//         // value={configName}
//         // onChange={setConfigName}
//         // onBlur={() => console.log("Input lost focus")}
//         placeholder="Enter config name"
//       />
//       <Input
//         label="Bot Name"
//         id="config-name"
//         // value={configName}
//         // onChange={setConfigName}
//         // onBlur={() => console.log("Input lost focus")}
//         placeholder="Enter Bot Name"
//       />
//       <Dropdown
//         label="Font Family"
//         id="my-dropdown"
//         options={options}
//         // value={selectedValue}
//         // onChange={setSelectedValue}
//       />

//       <ColorInput
//         label="Header Color"
//         id="header-color"
//         // value={color}
//         // onChange={setColor}
//         placeholder="Enter color name or hex"
//       />
//       <ColorInput
//         label="Header Font Color"
//         id="header-color"
//         // value={color}
//         // onChange={setColor}
//         placeholder="Enter color name or hex"
//       />
//       <ColorInput
//         label="Background Color"
//         id="header-color"
//         // value={color}
//         // onChange={setColor}
//         placeholder="Enter color name or hex"
//       />
//       <ColorInput
//         label="Chat Font Color"
//         id="header-color"
//         value={color}
//         onChange={setColor}
//         placeholder="Enter color name or hex"
//       />
//       <ImageUploader
//         label="Avatar Image"
//         id="avatar-image"
//         imageFile={avatarImage}
//         onChange={setAvatarImage}
//       />
//       <ImageUploader
//         label="Launcher Image"
//         id="launcher-image"
//         imageFile={launcherImage}
//         onChange={setLauncherImage}
//       />
//     </div>
//   );
// }

// export default ChatBotConfig;

"use client";

import { Button } from "../ui/Button";
import ColorInput from "../ui/ColorInput";
import Dropdown from "../ui/Dropdown";
import Input from "../ui/Input";
import ImageUploader from "../ui/ImageUploader";
import { useChatBot } from "@/context/chatbot";

function ChatBotConfig() {
  const { config, updateConfig, loadConfig, fontOptions } = useChatBot();

  return (
    <div className="p-10 bg-[#F7F7F7] h-screen flex flex-col gap-2">
      <Button className="h-8 w-28" onClick={loadConfig}>
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
