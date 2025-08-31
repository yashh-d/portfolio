# Personal Portfolio

A modern personal portfolio website built with Next.js featuring a beautiful sunrise video hero section.

## Features

- 🎥 Full-screen video hero section
- 📱 Responsive design (mobile & desktop)
- ⚡ Built with Next.js for optimal performance
- 🚀 Static export capability for easy deployment
- ♿ Accessibility features included

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

To export as static files:

```bash
npm run export
# or
yarn export
```

The static files will be generated in the `out` directory, ready for deployment to any static hosting service.

## Deployment Options

- **Vercel**: Connect your GitHub repository to Vercel for automatic deployments
- **Netlify**: Drag and drop the `out` folder to Netlify
- **GitHub Pages**: Use the static export in the `out` folder
- **Any static hosting**: Upload the contents of the `out` folder

## Project Structure

```
Portfolio/
├── app/
│   ├── components/
│   │   ├── VideoHero.tsx
│   │   └── VideoHero.module.css
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── page.module.css
├── public/
│   └── Mediterranean_Sunrise_Video_Generation.mp4
├── next.config.js
├── package.json
└── tsconfig.json
```

## Customization

- Edit `app/page.tsx` to add content below the video
- Modify styles in the CSS module files
- Replace the video file in the `public` directory
- Update metadata in `app/layout.tsx` 