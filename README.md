# Erasify 🎨

> An open-source alternative to Eraser.io - Draw, collaborate, and create without limits!

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)](https://tailwindcss.com/)
[![Convex](https://img.shields.io/badge/Convex-DB-FF6B6B)](https://convex.dev/)
[![Kinde Auth](https://img.shields.io/badge/Kinde-Auth-6C5CE7)](https://kinde.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 Motivation

While Eraser.io is a powerful tool for technical diagrams and documentation, it comes with limitations:
- 💰 **Paid subscription** required for full features
- 📄 **Limited document creation** on free tier
- 🔒 **Storage constraints** that restrict creativity

**Erasify** breaks these barriers by offering:
- ✨ **Unlimited document creation** - Create as many projects as you need
- 🎨 **Full-featured drawing tools** - Draw, sketch, and diagram without limits
- 📝 **Rich text editing** - Write and format your content freely
- ⚡ **Auto-save every 5 seconds** - Never lose your work again
- 🔓 **100% Open Source** - Fork, modify, and deploy your own instance
- 🚀 **Self-hostable** - Own your data, control your infrastructure

## ✨ Features

### Core Functionality
- 🖊️ **Drawing Canvas** - Freehand drawing with multiple brush sizes and colors
- 📐 **Shape Tools** - Rectangle, circle, line, and arrow tools
- 📝 **Rich Text Editor** - Format text with markdown support
- 🗂️ **Multiple Workspaces** - Organize projects into teams and workspaces
- 💾 **Auto-save** - Automatic saving every 5 seconds
- 🔄 **Real-time Sync** - Changes sync instantly across devices

### Technical Features
- ⚡ **Real-time Collaboration** - Powered by Convex DB
- 🔐 **Secure Authentication** - Kinde Auth integration
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🎨 **Customizable Themes** - Tailwind CSS for easy styling
- 🐳 **Docker Support** - One-command deployment

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) - React framework with App Router
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Database:** [Convex](https://convex.dev/) - Real-time backend platform
- **Authentication:** [Kinde](https://kinde.com/) - Modern auth solution
- **Language:** TypeScript - Type-safe development

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18+ and npm/yarn/pnpm/bun
- Docker and Docker Compose (for containerized deployment)
- A Convex account ([Sign up here](https://convex.dev/))
- A Kinde account ([Sign up here](https://kinde.com/))

## 🚀 Quick Start

### Option 1: Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/erasify.git
   cd erasify
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Convex
   CONVEX_DEPLOYMENT=your-convex-deployment-url
   NEXT_PUBLIC_CONVEX_URL=your-convex-url
   
   # Kinde Auth
   KINDE_CLIENT_ID=your-kinde-client-id
   KINDE_CLIENT_SECRET=your-kinde-client-secret
   KINDE_ISSUER_URL=https://yourdomain.kinde.com
   KINDE_SITE_URL=http://localhost:3000
   KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
   KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/dashboard
   
   # Next.js
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Initialize Convex**
   ```bash
   npx convex dev
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Option 2: Docker Deployment (Recommended)

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/erasify.git
   cd erasify
   ```

2. **Configure environment**
   
   Copy `.env.example` to `.env` and fill in your credentials:
   ```bash
   cp .env.example .env
   ```

3. **Build and run with Docker Compose**
   ```bash
   docker-compose up --build
   ```

4. **Access the application**
   
   Open [http://localhost:3000](http://localhost:3000)

## 🐳 Docker Deployment

The project includes a complete Docker setup for easy deployment. See `docker-compose.yml` for configuration.

### Commands

```bash
# Build and start containers
docker-compose up --build

# Run in detached mode
docker-compose up -d

# Stop containers
docker-compose down

# View logs
docker-compose logs -f

# Rebuild after changes
docker-compose up --build --force-recreate
```

## 📁 Project Structure

```
erasify/
├── app/                      # Next.js App Router
│   ├── (routes)/            # Route groups
│   │   ├── dashboard/       # Dashboard route
│   │   ├── teams/          # Teams management
│   │   └── workspace/      # Workspace/canvas
│   ├── api/                # API routes
│   ├── _components/        # App-wide components
│   └── _context/           # React Context providers
├── components/             # Reusable components
├── convex/                # Convex backend functions
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/               # Static assets
├── .env.local           # Environment variables (create this)
├── docker-compose.yml   # Docker configuration
├── Dockerfile          # Docker image definition
└── README.md          # This file
```

## 🔧 Configuration

### Convex Setup

1. Install Convex CLI: `npm install -g convex`
2. Login: `npx convex login`
3. Initialize: `npx convex dev`
4. Deploy: `npx convex deploy`

### Kinde Authentication Setup

1. Create a Kinde account at [kinde.com](https://kinde.com/)
2. Create a new application
3. Configure redirect URIs:
   - `http://localhost:3000/api/auth/kinde_callback` (development)
   - `https://yourdomain.com/api/auth/kinde_callback` (production)
4. Copy credentials to `.env.local`

## 🎯 Usage

### Creating Your First Document

1. **Sign Up/Login** - Use Kinde authentication
2. **Create a Team** - Organize your work into teams
3. **Create a Workspace** - Start a new canvas
4. **Start Creating** - Draw, write, and design
5. **Auto-save** - Your work saves automatically every 5 seconds

### Keyboard Shortcuts

- `Ctrl/Cmd + S` - Manual save
- `Ctrl/Cmd + Z` - Undo
- `Ctrl/Cmd + Y` - Redo
- `Delete` - Delete selected element
- `Esc` - Deselect all

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `CONVEX_DEPLOYMENT` | Convex deployment URL | Yes |
| `NEXT_PUBLIC_CONVEX_URL` | Public Convex URL | Yes |
| `KINDE_CLIENT_ID` | Kinde client ID | Yes |
| `KINDE_CLIENT_SECRET` | Kinde client secret | Yes |
| `KINDE_ISSUER_URL` | Kinde issuer URL | Yes |
| `KINDE_SITE_URL` | Your site URL | Yes |
| `NEXT_PUBLIC_APP_URL` | Public app URL | Yes |

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy!

### Docker (Self-hosted)

```bash
docker-compose up -d
```

### Other Platforms

Erasify can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Render
- AWS
- Google Cloud
- Azure

## 📊 Roadmap

- [ ] Real-time collaboration cursors
- [ ] Export to PNG/SVG/PDF
- [ ] Template library
- [ ] Version history
- [ ] Comments and annotations
- [ ] Presentation mode
- [ ] Mobile app (React Native)
- [ ] Plugin system

## 🐛 Known Issues

Check the [Issues](https://github.com/yourusername/erasify/issues) page for current bugs and feature requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [Eraser.io](https://eraser.io/)
- Built with [Next.js](https://nextjs.org/)
- Powered by [Convex](https://convex.dev/)
- Secured by [Kinde](https://kinde.com/)

## 📞 Support

- 📧 Email: support@erasify.com
- 💬 Discord: [Join our community](https://discord.gg/erasify)
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/erasify/issues)
- 📖 Docs: [Documentation](https://docs.erasify.com)

## ⭐ Star History

If you find Erasify useful, please consider giving it a star!

---

**Made with ❤️ by the Erasify Team**

[Website](https://erasify.com) • [Documentation](https://docs.erasify.com) • [Discord](https://discord.gg/erasify) • [Twitter](https://twitter.com/erasify)
