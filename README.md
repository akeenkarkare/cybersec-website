# SBU Cybersecurity Club Website

A terminal-themed interactive website for Stony Brook University's Cybersecurity Club built with Next.js, React, and Tailwind CSS.

## Features

- 🖥️ Interactive terminal component with working commands
- 🎨 Terminal/hacker aesthetic with green-on-black theme
- ✨ Glitch text effects and typewriter animations
- 📱 Fully responsive design
- 🎯 Multiple pages: Home, About, Events, Resources, CTF, Contact
- 🌐 Matrix rain background effect
- ⚡ Fast performance with Next.js Turbopack

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Terminal Commands

The interactive terminal on the homepage supports these commands:
- `help` - Show available commands
- `about` - Learn about SBU CyberSec Club
- `events` - View upcoming events
- `ctf` - CTF competition information
- `resources` - Learning resources
- `contact` - Get in touch
- `clear` - Clear terminal
- `whoami` - Display user info
- `date` - Show current date
- `ls` - List files
- `pwd` - Print working directory

## Project Structure

```
cybersec-website/
├── app/
│   ├── layout.tsx         # Main layout with navigation
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles and animations
│   ├── about/page.tsx     # About page
│   ├── events/page.tsx    # Events page
│   ├── resources/page.tsx # Resources page
│   ├── ctf/page.tsx       # CTF page
│   └── contact/page.tsx   # Contact page
├── components/
│   ├── Terminal.tsx       # Interactive terminal component
│   ├── Navigation.tsx     # Navigation bar
│   ├── MatrixRain.tsx     # Matrix rain background
│   ├── GlitchText.tsx     # Glitch text effect
│   └── TypewriterText.tsx # Typewriter animation
├── tailwind.config.js     # Tailwind configuration
└── package.json           # Project dependencies
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Turbopack** - Fast bundler

## Customization

### Colors
Edit the terminal color palette in `tailwind.config.js`:
```js
colors: {
  terminal: {
    bg: '#0a0e14',
    green: '#00ff00',
    cyan: '#00ffff',
    yellow: '#ffff00',
    red: '#ff0040',
    purple: '#bd93f9',
  }
}
```

### Fonts
The website uses JetBrains Mono font. You can change it in `tailwind.config.js`.

## Build for Production

```bash
npm run build
npm start
```

## License

MIT