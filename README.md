# Arsalan Javed Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚡️ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 🌙 Dark theme with custom color palette
- ✨ Framer Motion animations
- 📱 Fully responsive design
- 🎯 TypeScript for type safety
- 🔧 ESLint + Prettier configured
- 🎭 Custom UI components with shadcn/ui architecture
- 🎪 Smooth scroll navigation
- 🌟 Glow effects and modern design

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge
- **Text Balance**: react-wrap-balancer

## 📂 Project Structure

```
src/
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Home page
├── components/          # Reusable components
│   ├── ui/              # UI components (button, etc.)
│   ├── Container.tsx
│   ├── Navbar.tsx
│   └── Section.tsx
├── sections/            # Page sections
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Automations.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/                # Data files
│   ├── skills.ts
│   ├── projects.ts
│   └── automations.ts
├── lib/                 # Utility functions
│   ├── cn.ts           # Class name utility
│   └── animations.ts   # Animation variants
└── styles/
    └── globals.css      # Global styles
```

## 🎨 Color Palette

- **Primary**: `#00e5ff` (Cyan)
- **Secondary**: `#ff4f81` (Pink)
- **Background**: `#0d0d0d` (Dark)
- **Card**: `#161616` (Dark Gray)
- **Text**: `#ffffff` (White)

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd "d:\Arsalan\Arsalan Javed Portfolio"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🎯 Customization

### Personal Information

Update the following files with your information:

1. **src/app/layout.tsx** - Update metadata (title, description, URLs)
2. **src/sections/Hero.tsx** - Update name, social links, email
3. **src/sections/Footer.tsx** - Update contact information
4. **src/sections/Contact.tsx** - Update email and location

### Content

Update these data files with your actual content:

- **src/data/skills.ts** - Your technical skills
- **src/data/projects.ts** - Your projects with links
- **src/data/automations.ts** - Your automation solutions

### Styling

Customize colors in **tailwind.config.ts**:

```typescript
colors: {
  primary: "#00e5ff",      // Change to your primary color
  secondary: "#ff4f81",    // Change to your secondary color
  background: "#0d0d0d",
  card: "#161616",
  text: "#ffffff",
}
```

## 🌟 Features to Add

- [ ] Add actual project images
- [ ] Integrate contact form with email service
- [ ] Add blog section
- [ ] Implement dark/light theme toggle
- [ ] Add more animations
- [ ] Add testimonials section
- [ ] Integrate CMS for content management
- [ ] Add SEO optimizations
- [ ] Add analytics

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 Mobile devices (< 768px)
- 📱 Tablets (768px - 1024px)
- 💻 Desktops (> 1024px)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

You can also deploy to:
- Netlify
- AWS Amplify
- Cloudflare Pages
- GitHub Pages (with static export)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Arsalan Javed**
- Portfolio: [Your Website](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)

---

Made with ❤️ using Next.js
