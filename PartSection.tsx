import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { CoursePart } from '../data/courseContent';
import CodeBlock from './CodeBlock';
import CalloutBox from './CalloutBox';

gsap.registerPlugin(ScrollTrigger);

interface PartSectionProps {
  part: CoursePart;
}

export default function PartSection({ part }: PartSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      const num = headerRef.current.querySelector('.part-number');
      const title = headerRef.current.querySelector('.part-title');
      const subtitle = headerRef.current.querySelector('.part-subtitle');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      });

      if (num) tl.fromTo(num, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' });
      if (title) tl.fromTo(title, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.3');
      if (subtitle) tl.fromTo(subtitle, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.4');
    }

    // Content animations
    contentRefs.current.forEach((el) => {
      if (el) {
        gsap.fromTo(el,
          { y: 15, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.5, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' }
          }
        );
      }
    });

    // TOC progress bar update
    const progressBar = document.getElementById(`toc-progress-${part.id}`);
    if (progressBar && sectionRef.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        onUpdate: (self) => {
          progressBar.style.width = `${self.progress * 100}%`;
        }
      });
    }

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, [part.id]);

  const renderBlock = (block: { type: string; content?: string; language?: string; headers?: string[]; rows?: string[][] }, idx: number) => {
    switch (block.type) {
      case 'text':
        return (
          <p
            key={idx}
            ref={el => { contentRefs.current[idx] = el; }}
            className="font-dm text-base leading-[1.8] mb-4 opacity-0"
            style={{ color: '#F2F1E9' }}
            dangerouslySetInnerHTML={{ __html: block.content || '' }}
          />
        );

      case 'heading':
        return (
          <h3
            key={idx}
            ref={el => { contentRefs.current[idx] = el; }}
            className="font-dm text-2xl font-semibold mt-10 mb-4 opacity-0"
            style={{ color: '#F2F1E9' }}
            dangerouslySetInnerHTML={{ __html: block.content || '' }}
          />
        );

      case 'subheading':
        return (
          <h4
            key={idx}
            ref={el => { contentRefs.current[idx] = el; }}
            className="font-dm text-lg font-semibold mt-8 mb-3 opacity-0"
            style={{ color: '#C4A265' }}
            dangerouslySetInnerHTML={{ __html: block.content || '' }}
          />
        );

      case 'code':
        return (
          <div key={idx} ref={el => { contentRefs.current[idx] = el; }} className="opacity-0">
            <CodeBlock code={block.content || ''} language={block.language || 'text'} />
          </div>
        );

      case 'prompt':
        return (
          <div
            key={idx}
            ref={el => { contentRefs.current[idx] = el; }}
            className="my-6 rounded-lg overflow-hidden opacity-0"
            style={{ backgroundColor: '#1E1E2E', border: '1px solid #3E3E5E' }}
          >
            <div className="px-4 py-1.5 flex items-center gap-2" style={{ backgroundColor: '#2A2A3E' }}>
              <span className="font-dm text-[10px] uppercase tracking-wider" style={{ color: '#A09E94' }}>
                Prompt
              </span>
            </div>
            <pre className="p-6 overflow-x-auto">
              <code className="font-mono text-sm whitespace-pre" style={{ color: '#F2F1E9', lineHeight: 1.7 }}>
                {block.content}
              </code>
            </pre>
          </div>
        );

      case 'list':
        return (
          <ul
            key={idx}
            ref={el => { contentRefs.current[idx] = el; }}
            className="my-4 space-y-2 opacity-0"
          >
            {(block.content || '').split('\n').map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#E86141' }} />
                <span
                  className="font-dm text-base leading-[1.7]"
                  style={{ color: '#F2F1E9' }}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </li>
            ))}
          </ul>
        );

      case 'tip':
        return (
          <div key={idx} ref={el => { contentRefs.current[idx] = el; }} className="opacity-0">
            <CalloutBox type="tip" content={block.content || ''} />
          </div>
        );

      case 'warning':
        return (
          <div key={idx} ref={el => { contentRefs.current[idx] = el; }} className="opacity-0">
            <CalloutBox type="warning" content={block.content || ''} />
          </div>
        );

      case 'table':
        return (
          <div
            key={idx}
            ref={el => { contentRefs.current[idx] = el; }}
            className="my-6 rounded-lg overflow-hidden opacity-0"
            style={{ border: '1px solid #33332F' }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                {block.headers && (
                  <thead>
                    <tr style={{ backgroundColor: '#22221F' }}>
                      {block.headers.map((h, i) => (
                        <th
                          key={i}
                          className="px-4 py-3 text-left font-dm text-sm font-semibold"
                          style={{ color: '#F2F1E9', borderBottom: '1px solid #33332F' }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                )}
                <tbody>
                  {block.rows?.map((row, ri) => (
                    <tr
                      key={ri}
                      style={{ backgroundColor: ri % 2 === 0 ? '#1C1C19' : '#22221F' }}
                    >
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className="px-4 py-3 font-dm text-sm"
                          style={{ color: '#F2F1E9' }}
                          dangerouslySetInnerHTML={{ __html: cell }}
                        />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      id={part.id}
      ref={sectionRef}
      className="py-20 sm:py-28 px-6 relative"
      style={{ backgroundColor: '#1C1C19' }}
    >
      {/* Dot grid fade at top */}
      <div className="absolute top-0 left-0 right-0 h-32 dot-grid-fade pointer-events-none" />

      <div className="max-w-3xl mx-auto relative">
        {/* Part Header */}
        <div ref={headerRef} className="mb-12">
          <span className="part-number font-dm text-xs uppercase tracking-[0.08em] mb-3 block" style={{ color: '#E86141' }}>
            {part.eyebrow}
          </span>
          <h2 className="part-title font-anton text-4xl sm:text-5xl md:text-6xl uppercase mb-4" style={{ color: '#F2F1E9' }}>
            {part.title}
          </h2>
          <p className="part-subtitle font-dm text-base sm:text-lg max-w-2xl" style={{ color: '#A09E94', lineHeight: 1.6 }}>
            {part.subtitle}
          </p>
          <div className="w-20 h-[3px] mt-6" style={{ backgroundColor: '#E86141' }} />
        </div>

        {/* Sections */}
        {part.sections.map((section, si) => (
          <div key={section.id} className={si > 0 ? 'mt-14' : ''}>
            {/* Section Title */}
            <div className="flex items-start gap-4 mb-6">
              {section.badge && (
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#E86141' }}
                >
                  <span className="font-anton text-lg" style={{ color: '#F2F1E9' }}>
                    {section.badge}
                  </span>
                </div>
              )}
              <h3 className="font-dm text-xl sm:text-2xl font-semibold pt-1.5" style={{ color: '#F2F1E9' }}>
                {section.title}
              </h3>
            </div>

            {/* Section Content */}
            <div>
              {section.blocks.map((block, bi) => renderBlock(block, si * 100 + bi))}
            </div>
          </div>
        ))}

        {/* Part divider */}
        <div className="mt-16 pt-8 border-t" style={{ borderColor: '#33332F' }}>
          <div className="flex items-center justify-between">
            <span className="font-dm text-xs uppercase tracking-wider" style={{ color: '#A09E94' }}>
              Part {String(part.number).padStart(2, '0')} Complete
            </span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4CAF50' }} />
              <span className="font-dm text-xs" style={{ color: '#4CAF50' }}>Done</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
