import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import courseParts from '../data/courseContent';

gsap.registerPlugin(ScrollTrigger);

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  activePart: string;
  onNavigate: (id: string) => void;
}

const navItems = [
  { id: 'hero', label: 'Start Here', number: '' },
  { id: 'toc', label: 'Contents', number: '' },
  ...courseParts.map(p => ({ id: p.id, label: p.title, number: String(p.number).padStart(2, '0') })),
];

export default function Sidebar({ isOpen, onToggle, activePart, onNavigate }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [progress, setProgress] = useState(0);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  useEffect(() => {
    if (progressRef.current) {
      gsap.to(progressRef.current, { width: `${progress}%`, duration: 0.3, ease: 'power2.out' });
    }
  }, [progress]);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    if (window.innerWidth < 1024) {
      onToggle();
    }
  };

  const sidebarWidth = isCollapsed ? 'w-[60px]' : 'w-[280px]';

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center px-4 lg:hidden"
        style={{ backgroundColor: '#1C1C19', borderBottom: '1px solid #33332F' }}>
        <button onClick={onToggle} className="p-2 -ml-2">
          {isOpen ? <X size={20} color="#F2F1E9" /> : <Menu size={20} color="#F2F1E9" />}
        </button>
        <span className="font-anton text-sm tracking-wide" style={{ color: '#F2F1E9' }}>
          AI WEBSITE MASTERY
        </span>
        <span className="ml-auto font-dm text-xs" style={{ color: '#E86141' }}>
          {Math.round(progress)}%
        </span>
      </div>

      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full z-50 transition-all duration-300 ease-in-out flex flex-col
          ${sidebarWidth}
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0`}
        style={{
          backgroundColor: '#22221F',
          borderRight: '1px solid #33332F',
        }}
      >
        {/* Collapse toggle (desktop only) */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full hidden lg:flex items-center justify-center cursor-pointer z-10"
          style={{ backgroundColor: '#33332F' }}
        >
          {isCollapsed ? <ChevronRight size={14} color="#F2F1E9" /> : <ChevronLeft size={14} color="#F2F1E9" />}
        </button>

        {/* Brand */}
        <div className="px-6 pt-6 pb-4">
          {!isCollapsed ? (
            <>
              <div className="flex items-center gap-2 mb-1">
                <BookOpen size={18} color="#E86141" />
                <span className="font-anton text-lg tracking-wide" style={{ color: '#F2F1E9' }}>
                  AI WEBSITE
                </span>
              </div>
              <span className="font-anton text-lg tracking-wide block" style={{ color: '#E86141' }}>
                MASTERY
              </span>
              <span className="font-dm text-[11px] uppercase tracking-widest mt-2 block" style={{ color: '#A09E94' }}>
                Complete Course Guide
              </span>
            </>
          ) : (
            <div className="flex justify-center">
              <BookOpen size={20} color="#E86141" />
            </div>
          )}
        </div>

        {/* Progress bar */}
        <div className="mx-6 mb-4 h-[3px] rounded-full overflow-hidden" style={{ backgroundColor: '#33332F' }}>
          <div
            ref={progressRef}
            className="h-full rounded-full"
            style={{ backgroundColor: '#E86141', width: '0%' }}
          />
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto py-2">
          {navItems.map((item) => {
            const isActive = activePart === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-6 py-3 flex items-center gap-3 transition-all duration-200 cursor-pointer
                  ${isActive ? 'border-l-[3px]' : 'border-l-[3px] border-l-transparent'}`}
                style={{
                  borderLeftColor: isActive ? '#E86141' : 'transparent',
                  backgroundColor: isActive ? '#2A2A27' : 'transparent',
                }}
                onMouseEnter={e => {
                  if (!isActive) e.currentTarget.style.backgroundColor = '#2A2A27';
                }}
                onMouseLeave={e => {
                  if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {item.number && (
                  <span
                    className={`font-anton text-sm shrink-0 ${isCollapsed ? 'text-base' : ''}`}
                    style={{ color: isActive ? '#E86141' : '#A09E94' }}
                  >
                    {item.number}
                  </span>
                )}
                {!isCollapsed && (
                  <span
                    className="font-dm text-sm truncate"
                    style={{ color: isActive ? '#E86141' : '#F2F1E9' }}
                  >
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        {!isCollapsed && (
          <div className="px-6 py-4 border-t" style={{ borderColor: '#33332F' }}>
            <span className="font-dm text-[11px]" style={{ color: '#A09E94' }}>
              9 Parts &middot; Step-by-Step
            </span>
          </div>
        )}
      </div>
    </>
  );
}
