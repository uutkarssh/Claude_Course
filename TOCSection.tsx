import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import courseParts from '../data/courseContent';

gsap.registerPlugin(ScrollTrigger);

interface TOCSectionProps {
  onNavigate: (id: string) => void;
}

export default function TOCSection({ onNavigate }: TOCSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%', toggleActions: 'play none none none' }
        }
      );
    }

    cardsRef.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6, delay: i * 0.06, ease: 'power2.out',
            scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none none' }
          }
        );
      }
    });

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <section
      id="toc"
      ref={sectionRef}
      className="py-24 sm:py-32 px-6"
      style={{ backgroundColor: '#1C1C19' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-12 opacity-0">
          <span className="font-dm text-xs uppercase tracking-[0.08em] block mb-3" style={{ color: '#A09E94' }}>
            Course Overview
          </span>
          <h2 className="font-dm text-3xl sm:text-4xl font-semibold mb-4" style={{ color: '#F2F1E9' }}>
            Your Learning Path
          </h2>
          <div className="w-16 h-0.5" style={{ backgroundColor: '#E86141' }} />
        </div>

        {/* TOC Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courseParts.map((part, i) => (
            <div
              key={part.id}
              ref={el => { cardsRef.current[i] = el; }}
              onClick={() => onNavigate(part.id)}
              className="rounded-lg p-6 cursor-pointer transition-all duration-200 opacity-0"
              style={{
                backgroundColor: '#22221F',
                border: '1px solid #33332F',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#E86141';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#33332F';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span className="font-anton text-4xl block mb-3" style={{ color: '#E86141' }}>
                {String(part.number).padStart(2, '0')}
              </span>
              <h3 className="font-dm text-base font-semibold mb-2" style={{ color: '#F2F1E9' }}>
                {part.title}
              </h3>
              <p className="font-dm text-[13px] line-clamp-2" style={{ color: '#A09E94' }}>
                {part.subtitle}
              </p>
              {/* Progress bar */}
              <div className="mt-4 h-[3px] rounded-full overflow-hidden" style={{ backgroundColor: '#33332F' }}>
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ backgroundColor: '#4CAF50', width: '0%' }}
                  id={`toc-progress-${part.id}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
