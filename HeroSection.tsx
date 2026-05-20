import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { BookOpen, ListChecks, Heart, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onStartLearning: () => void;
}

export default function HeroSection({ onStartLearning }: HeroSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.to(labelRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
      .to(line1Ref.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
      .to(line2Ref.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .to(line3Ref.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
      .to(metaRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
      .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
      .to(scrollRef.current, { opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.2');

    // Scroll indicator animation
    if (scrollRef.current) {
      const dot = scrollRef.current.querySelector('.scroll-dot');
      if (dot) {
        gsap.to(dot, {
          y: 32,
          duration: 1.5,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true,
        });
      }
    }

    return () => { tl.kill(); };
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-6"
      style={{ backgroundColor: '#1C1C19' }}
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid" style={{ opacity: 0.4 }} />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Label */}
        <span
          ref={labelRef}
          className="inline-block font-dm text-xs uppercase tracking-[0.15em] mb-8 opacity-0 translate-y-4"
          style={{ color: '#A09E94' }}
        >
          Complete Course Guide
        </span>

        {/* Title */}
        <div className="space-y-1 mb-8">
          <div ref={line1Ref} className="opacity-0 translate-y-8">
            <span className="font-anton text-5xl sm:text-6xl md:text-7xl uppercase tracking-wide" style={{ color: '#F2F1E9' }}>
              CREATE YOUR
            </span>
          </div>
          <div ref={line2Ref} className="opacity-0 translate-y-8">
            <span className="font-anton text-6xl sm:text-7xl md:text-8xl uppercase tracking-wide block" style={{ color: '#E86141' }}>
              AI WEBSITE
            </span>
          </div>
          <div ref={line3Ref} className="opacity-0 translate-y-8">
            <span className="font-anton text-5xl sm:text-6xl md:text-7xl uppercase tracking-wide" style={{ color: '#F2F1E9' }}>
              FROM ZERO
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="font-dm text-base sm:text-lg md:text-xl mb-10 max-w-xl mx-auto opacity-0 translate-y-4"
          style={{ color: '#A09E94', lineHeight: 1.7 }}
        >
          Claude AI se coding seekho. GitHub par code rakho. Vercel se duniya ko dikhao.
        </p>

        {/* Meta info */}
        <div ref={metaRef} className="flex items-center justify-center gap-8 mb-10 opacity-0 translate-y-4 flex-wrap">
          <div className="flex items-center gap-2">
            <BookOpen size={16} color="#E86141" />
            <span className="font-dm text-sm" style={{ color: '#A09E94' }}>9 Parts</span>
          </div>
          <div className="flex items-center gap-2">
            <ListChecks size={16} color="#E86141" />
            <span className="font-dm text-sm" style={{ color: '#A09E94' }}>Step-by-Step</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart size={16} color="#E86141" />
            <span className="font-dm text-sm" style={{ color: '#A09E94' }}>Beginner Friendly</span>
          </div>
        </div>

        {/* CTA */}
        <button
          ref={ctaRef}
          onClick={onStartLearning}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded font-dm text-[15px] font-medium cursor-pointer transition-colors duration-200 opacity-0 translate-y-4"
          style={{ backgroundColor: '#E86141', color: '#F2F1E9' }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#F07050'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#E86141'}
        >
          Start Learning
          <ArrowDown size={16} />
        </button>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
      >
        <div className="relative w-[1px] h-10" style={{ backgroundColor: '#A09E94' }}>
          <div
            className="scroll-dot absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
            style={{ backgroundColor: '#E86141' }}
          />
        </div>
        <span className="font-dm text-[11px] uppercase tracking-wider" style={{ color: '#A09E94' }}>
          Scroll to begin
        </span>
      </div>
    </section>
  );
}
