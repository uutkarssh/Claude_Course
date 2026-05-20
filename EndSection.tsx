import { Star } from 'lucide-react';

interface EndSectionProps {
  onNavigate: (id: string) => void;
}

const navLinks = [
  { id: 'part-1', label: '01 — Accounts' },
  { id: 'part-2', label: '02 — Planning' },
  { id: 'part-3', label: '03 — HTML/CSS/JS' },
  { id: 'part-4', label: '04 — Single vs Multiple' },
  { id: 'part-5', label: '05 — File Creation' },
  { id: 'part-6', label: '06 — Bug Fixing' },
  { id: 'part-7', label: '07 — GitHub' },
  { id: 'part-8', label: '08 — Vercel' },
  { id: 'part-9', label: '09 — Deploy' },
];

export default function EndSection({ onNavigate }: EndSectionProps) {
  return (
    <section
      className="py-24 sm:py-32 px-6"
      style={{ backgroundColor: '#22221F', borderTop: '1px solid #33332F' }}
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Completion badge */}
        <div
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mx-auto mb-10"
          style={{ backgroundColor: '#E86141' }}
        >
          <Star size={48} color="#F2F1E9" fill="#F2F1E9" />
        </div>

        {/* Title */}
        <h2 className="font-anton text-5xl sm:text-6xl uppercase mb-2" style={{ color: '#F2F1E9' }}>
          Congratulations!
        </h2>
        <h3 className="font-anton text-3xl sm:text-4xl uppercase mb-8" style={{ color: '#E86141' }}>
          Course Complete
        </h3>

        {/* Message */}
        <p className="font-dm text-base sm:text-lg mb-10 max-w-xl mx-auto" style={{ color: '#A09E94', lineHeight: 1.7 }}>
          Ab tumhari website live hai! Claude AI, GitHub, aur Vercel seekh liye — ab koi bhi website bana sakte ho.
        </p>

        {/* Creator credit */}
        <p className="font-dm text-sm italic mb-12" style={{ color: '#A09E94' }}>
          Made with honesty and curiosity by Utkarsh Maurya
        </p>

        {/* Footer nav */}
        <div className="flex flex-wrap justify-center gap-3">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className="px-4 py-2 rounded font-dm text-[13px] transition-colors duration-200 cursor-pointer"
              style={{ color: '#A09E94', backgroundColor: '#1C1C19' }}
              onMouseEnter={e => e.currentTarget.style.color = '#E86141'}
              onMouseLeave={e => e.currentTarget.style.color = '#A09E94'}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
