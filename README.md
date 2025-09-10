# Fashion Voice Find 🛍️

A cutting-edge fashion e-commerce application powered by AI, featuring intelligent product search, voice descriptions, and semantic similarity matching. Built with Next.js 14, TypeScript, and modern AI technologies.

## ✨ Features

### 🎤 AI-Powered Voice Features
- **Voice Product Descriptions**: Get natural, conversational descriptions of any product using OpenAI Vision and ElevenLabs TTS
- **Human-like Speech**: Advanced voice synthesis with natural pauses, breathing, and emotional tones
- **Multiple Voice Personalities**: Excited, professional, casual, and conversational modes

### 🔍 Intelligent Search
- **Semantic Search**: Vector-based product search using Pinecone and OpenAI embeddings
- **Visual Search**: Search by uploading product images
- **Smart Filtering**: Advanced filtering by category, brand, gender, price, and custom tags

### 🛒 Shopping Experience
- **Wishlist Management**: Save favorite items with localStorage persistence
- **Shopping Cart**: Full-featured cart with quantity management and checkout simulation
- **Product Recommendations**: AI-powered suggestions based on similarity matching
- **Responsive Design**: Optimized for all devices

## 🚀 Quick Start

1. **Clone and install**
```bash
git clone https://github.com/honeykeys/fashionassistant.git
cd fashionassistant
npm install
```

2. **Set up environment variables**
```bash
cp .env.example .env.local
# Add your API keys
```

3. **Initialize database**
```bash
npm run setup
```

4. **Start development**
```bash
npm run dev
```

## 🔧 Environment Variables

```env
OPENAI_API_KEY=your_openai_api_key_here
PINECONE_API_KEY=your_pinecone_api_key_here
PINECONE_INDEX_NAME=fashion-voice-search
ELEVENLABS_API_KEY=your_elevenlabs_api_key_here
NEXT_PUBLIC_ELEVENLABS_API_KEY=your_elevenlabs_api_key_here
NEXT_PUBLIC_ELEVENLABS_VOICE_ID=HDA9tsk27wYi3uq0fPcK
```

## 🚀 Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy - optimized configuration included

Built with ❤️ using Next.js, OpenAI, Pinecone, and ElevenLabs.