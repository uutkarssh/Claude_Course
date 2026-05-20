import { useState, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import courseParts from './data/courseContent';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import TOCSection from './components/TOCSection';
import PartSection from './components/PartSection';
import EndSection from './components/EndSection';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePart, setActivePart] = useState('hero');

  // Handle navigation
  const handleNavigate = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const offset = window.innerWidth < 1024 ? 56 : 0; // Account for mobile top bar
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: targetPosition, autoKill: true },
        ease: 'power3.inOut',
      });
    }
  }, []);

  // Scroll-triggered active section detection
  useEffect(() => {
    const sectionIds = ['hero', 'toc', ...courseParts.map(p => p.id)];

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        ScrollTrigger.create({
          trigger: element,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActivePart(id),
          onEnterBack: () => setActivePart(id),
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Handle deep linking on load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        handleNavigate(hash);
      }, 500);
    }
  }, [handleNavigate]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1C1C19' }}>
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        activePart={activePart}
        onNavigate={handleNavigate}
      />

      {/* Main content */}
      <main className="lg:ml-[280px]">
        {/* Mobile top bar spacer */}
        <div className="h-14 lg:hidden" />

        {/* Hero */}
        <HeroSection onStartLearning={() => handleNavigate('toc')} />

        {/* Table of Contents */}
        <TOCSection onNavigate={handleNavigate} />

        {/* Part sections */}
        {courseParts.map(part => (
          <PartSection key={part.id} part={part} />
        ))}

        {/* End section */}
        <EndSection onNavigate={handleNavigate} />
      </main>
    </div>
  );
}
