# 💍 Premium Modern Wedding Invitation Website

A luxury, cinematic wedding invitation website built with cutting-edge technologies. This project features smooth animations, elegant design, and a premium user experience that celebrates love.

## ✨ Features

### 🎨 Design & Aesthetics
- **Luxury Modern Aesthetic**: Soft romantic colors (beige, ivory, champagne gold, blush pink)
- **Glassmorphism UI**: Modern glass-effect cards with backdrop blur
- **Elegant Typography**: Playfair Display, Cormorant Garamond, and Poppins fonts
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Dark/Light Mode**: Automatic theme switching based on system preferences

### 🎬 Animations & Interactions
- **Framer Motion**: Smooth, cinematic entrance animations
- **GSAP Integration**: Advanced scroll animations and transitions
- **Lenis Smooth Scroll**: Buttery smooth vertical scrolling experience
- **Parallax Effects**: Image and element parallax on scroll
- **Floating Particles**: Animated particle background
- **Hover Effects**: Smooth glass blur and lift animations

### 📱 Sections Included

1. **Hero Landing** - Cinematic hero section with couple names, wedding date, and CTA buttons
2. **Countdown** - Live countdown with days, hours, minutes, and seconds
3. **Love Story Timeline** - Vertical timeline of relationship milestones with images
4. **Event Schedule** - Day program timeline with expandable event details
5. **Venue Information** - Google Maps integration, accommodations, and travel tips
6. **RSVP Form** - Premium form with meal preferences and special requests
7. **Photo Gallery** - Masonry layout with lightbox and category filters
8. **Guest Book** - Guest wishes/messages section
9. **Footer** - Thank you message with social media links

### 🎯 Advanced Features

- **Background Music**: Mute/unmute romantic instrumental music
- **Scroll Indicator**: Animated "scroll to explore" indicator
- **Floating Action Menu**: Quick navigation to key sections
- **Page Transitions**: Smooth fade-in animations between pages
- **Mobile App Feel**: Premium iPhone app-like UI experience
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- **Performance Optimized**: Lazy loading, image optimization, Lighthouse optimized

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS + Custom CSS animations
- **Animations**: Framer Motion + GSAP + Lenis
- **UI Components**: Shadcn UI + Custom components
- **Icons**: React Icons
- **State Management**: Zustand
- **HTTP Client**: Axios

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone or open the project**
   ```bash
   cd "Wedding Invite"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env.local
   ```

4. **Update couple data** (Optional)
   - Edit `config/coupleData.ts` with your information
   - Update `data/gallery.ts` with your photos

## 🚀 Getting Started

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Type Checking

```bash
npm run type-check
```

## 📁 Project Structure

```
Wedding Invite/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── Button.tsx           # Reusable button component
│   ├── GlassCard.tsx        # Glass effect card
│   ├── AnimatedSection.tsx  # Scroll-animated section wrapper
│   ├── Navbar.tsx           # Navigation with music toggle
│   ├── ScrollIndicator.tsx  # Scroll indicator
│   ├── ParticleBackground.tsx # Animated particle background
│   ├── CountdownCard.tsx    # Countdown display card
│   ├── FloatingMenu.tsx     # Floating action menu
│   └── index.ts             # Components export
├── sections/
│   ├── HeroSection.tsx          # Hero landing section
│   ├── CountdownSection.tsx     # Countdown timer section
│   ├── LoveStorySection.tsx     # Love story timeline
│   ├── EventScheduleSection.tsx # Day program schedule
│   ├── VenueSection.tsx         # Venue with maps
│   ├── RSVPSection.tsx          # RSVP form
│   ├── GallerySection.tsx       # Photo gallery
│   ├── GuestbookSection.tsx     # Guest messages
│   ├── FooterSection.tsx        # Footer with thank you
│   └── index.ts                 # Sections export
├── hooks/
│   ├── useCountdown.ts       # Countdown timer hook
│   ├── useScrollAnimation.ts # Scroll animation hook
│   ├── useSmoothScroll.ts    # Lenis smooth scroll hook
│   ├── useAudio.ts           # Audio control hook
│   └── index.ts              # Hooks export
├── config/
│   └── coupleData.ts         # Couple information and events
├── data/
│   └── gallery.ts            # Gallery images data
├── types/
│   └── index.ts              # TypeScript type definitions
├── lib/
│   └── (utility functions)
├── public/
│   ├── favicon.ico
│   └── music/
│       └── romantic.mp3      # Background music
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.js            # Next.js configuration
├── postcss.config.js         # PostCSS configuration
├── package.json              # Dependencies
├── .env.example              # Environment variables template
└── .env.local                # Local environment variables
```

## 🎨 Color Palette

- **Cream**: #FAF8F3
- **Ivory**: #FFFFF0
- **Champagne**: #F7EAE2
- **Blush**: #FFE5EC
- **Dusty Rose**: #D4A5A5
- **Soft Gold**: #E6D7B8
- **Dark Charcoal**: #1A1A1A
- **Warm Brown**: #8B7355

## 🎭 Typography

- **Headings**: Playfair Display (elegant serif)
- **Decorative**: Cormorant Garamond (elegant serif)
- **Body**: Poppins (modern sans-serif)

## 📝 Customization

### Update Couple Information
Edit `config/coupleData.ts`:
```typescript
export const coupleData = {
  groomName: 'Your Name',
  brideName: 'Partner Name',
  weddingDate: new Date('YYYY-MM-DD'),
  // ... other details
};
```

### Add/Update Gallery Images
Edit `data/gallery.ts`:
```typescript
export const galleryData = [
  {
    id: 1,
    src: 'https://your-image-url.com',
    alt: 'Image description',
    category: 'couple',
  },
  // ... more images
];
```

### Customize Colors
Edit `tailwind.config.js` colors section to change the color palette.

### Add Background Music
1. Place your music file in `public/music/`
2. Update the path in `components/Navbar.tsx`

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

```bash
npm run build
```

### Deploy to Other Platforms

The project is optimized for any Node.js hosting platform:
- Netlify
- AWS Amplify
- GitHub Pages (static export)
- Self-hosted server

## 📊 Performance Optimization

- ✅ Image optimization with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ CSS minification with Tailwind
- ✅ Lighthouse optimized (90+)
- ✅ Core Web Vitals optimized
- ✅ PWA ready

## 🔐 Security

- ✅ Content Security Policy ready
- ✅ XSS protection
- ✅ CSRF token support for forms
- ✅ Secure environment variables

## 📱 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Lenis scroll not working
- Ensure JavaScript is enabled
- Check browser console for errors
- Try disabling browser extensions

### Images not loading
- Verify image URLs are correct
- Check CORS settings
- Ensure image domains are added to `next.config.js`

### Animations laggy
- Reduce particle count in `components/ParticleBackground.tsx`
- Check GPU acceleration is enabled
- Close unnecessary browser tabs

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [GSAP Documentation](https://greensock.com/docs)
- [Lenis Smooth Scroll](https://github.com/studio-freight/lenis)

## 💝 Tips for Wedding Day

1. **Test Everything**: Review all sections on multiple devices
2. **Update Contact Info**: Ensure all contact details are correct
3. **Backup Music**: Have backup audio files
4. **Mobile Friendly**: Test extensively on mobile before sharing
5. **Share Widely**: Use social media and messaging apps to share

## 📄 License

This project is created for personal use. Feel free to customize and use for your wedding!

## 💬 Support

For questions or customization requests, consult the Next.js documentation or reach out to a web developer.

---

**Made with ❤️ for celebrating love and commitment.**

Congratulations on your upcoming wedding! 🎉💕
