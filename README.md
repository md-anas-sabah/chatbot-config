# Chatbot Configurator

A Next.js application for customizing and previewing chatbot interfaces with real-time configuration updates.

## Features

- Live preview of chatbot interface
- Customizable styling options:
  - Font family selection
  - Color schemes
  - Custom avatar and launcher images
- Speech-to-text functionality
- Config import/export functionality
- Responsive design
- Multiple font options (Inter, Roboto, Open Sans, Poppins, Lato, Montserrat)

## Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/md-anas-sabah/chatbot-config.git
cd chatbot-config
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Add required dependencies:
```bash
npm install @next/font lucide-react next-themes tailwindcss postcss autoprefixer
```

## Development

Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
├── app/
│   ├── layout.tsx        
│   └── page.tsx          
├   └──components/
│   ├── Chatbot/
│   │   ├── ChatBotInterface.tsx
│   │   └── LivePreview.tsx
│   └── ChatbotConfig/
│       └── ChatBotConfig.tsx
├── context/
│   └── chatbot.tsx       
└── public/
    └── assets/
        ├── bot.webp
        └── chat.avif
```

## Features Usage

### Config Customization
- **Bot Name**: Set custom name for the chatbot
- **Font Family**: Choose from available font options
- **Colors**: Customize header, background, and font colors
- **Images**: Upload custom avatar and launcher images

### Speech Recognition
The chatbot includes speech-to-text functionality:
1. Click the microphone icon
2. Speak your message
3. The text will appear in the input field

### Config Import/Export
- **Export**: Click "Download Config" to save current settings
- **Import**: Use "Load Config" to restore saved settings

## Configuration Options

```typescript
interface Config {
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
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
