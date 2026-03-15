import { useState } from 'react';
import heroImage from '@/assets/museum-hero.jpg';

interface LandingHeroProps {
  onEnter: () => void;
}

const LandingHero = ({ onEnter }: LandingHeroProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Background image with blur */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Museum interior"
          className="h-full w-full object-cover"
          style={{ filter: 'blur(6px) brightness(0.5)' }}
        />
        <div className="absolute inset-0 bg-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-10 px-6 text-center slide-up">
        <div className="flex flex-col items-center gap-3">
          <p
            className="text-sm font-body tracking-[0.4em] uppercase text-muted"
            style={{ animationDelay: '0.2s' }}
          >
            A Virtual Experience
          </p>
          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight"
          >
            The Grand
            <br />
            <span className="text-accent italic">Museum</span>
          </h1>
        </div>

        <p className="max-w-md text-base font-body text-muted font-light leading-relaxed">
          Walk through an immersive gallery of contemporary sculpture and painting.
          Experience art in three dimensions.
        </p>

        <button
          onClick={onEnter}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative mt-4 overflow-hidden border border-accent/60 px-12 py-4 font-body text-sm tracking-[0.3em] uppercase transition-all duration-500"
          style={{
            background: isHovered
              ? 'hsl(43, 56%, 52%)'
              : 'transparent',
            color: isHovered
              ? 'hsl(0, 0%, 10%)'
              : 'hsl(43, 56%, 52%)',
          }}
        >
          Enter Museum
        </button>

        <p className="text-xs font-body text-muted-foreground mt-2">
          WASD to move · Mouse to look · Click exhibits for details · VR headset supported
        </p>
      </div>
    </div>
  );
};

export default LandingHero;
