import { useState } from 'react';
import { Clipboard, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'text' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = code;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const highlightCode = (text: string, lang: string) => {
    if (lang === 'text' || lang === 'markdown') {
      return text.split('\n').map((line, i) => (
        <div key={i} className="table-row">
          <span className="table-cell text-right pr-4 select-none" style={{ color: '#555' }}>
            {i + 1}
          </span>
          <span className="table-cell" style={{ color: '#F2F1E9' }}>{line || ' '}</span>
        </div>
      ));
    }

    return text.split('\n').map((line, i) => {
      let highlighted = line;

      if (lang === 'html') {
        // Highlight HTML tags
        highlighted = highlighted
          .replace(/(&lt;\/?)([\w-]+)/g, '<span class="code-tag">$1$2</span>')
          .replace(/([\w-]+)=/g, '<span class="code-attr">$1</span>=')
          .replace(/"([^"]*)"/g, '<span class="code-string">"$1"</span>')
          .replace(/&lt;!--(.*?)--&gt;/g, '<span class="code-comment">&lt;!--$1--&gt;</span>');
      } else if (lang === 'css') {
        highlighted = highlighted
          .replace(/([\w-]+)\s*:/g, '<span class="code-attr">$1</span>:')
          .replace(/:\s*([^;{}]+)/g, ': <span class="code-string">$1</span>')
          .replace(/(\{|\})/g, '<span class="code-punctuation">$1</span>')
          .replace(/\/\*(.*?)\*\//g, '<span class="code-comment">/*$1*/</span>');
      } else if (lang === 'javascript' || lang === 'js') {
        const keywords = ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'import', 'export', 'from', 'default', 'class', 'new', 'this', 'true', 'false', 'null', 'undefined'];
        keywords.forEach(kw => {
          const regex = new RegExp(`\\b(${kw})\\b`, 'g');
          highlighted = highlighted.replace(regex, '<span class="code-keyword">$1</span>');
        });
        highlighted = highlighted
          .replace(/"([^"]*)"/g, '<span class="code-string">"$1"</span>')
          .replace(/'([^']*)'/g, '<span class="code-string">\'$1\'</span>')
          .replace(/\/\/(.*)/g, '<span class="code-comment">//$1</span>');
      }

      return (
        <div key={i} className="table-row">
          <span className="table-cell text-right pr-4 select-none" style={{ color: '#555' }}>
            {i + 1}
          </span>
          <span
            className="table-cell font-mono text-sm"
            dangerouslySetInnerHTML={{ __html: highlighted || ' ' }}
          />
        </div>
      );
    });
  };

  return (
    <div className="relative rounded-lg overflow-hidden my-6" style={{ backgroundColor: '#151513', border: '1px solid #33332F' }}>
      {/* Language label */}
      <div className="absolute top-0 left-0 px-3 py-1 rounded-br-md font-dm text-[11px] uppercase"
        style={{ backgroundColor: '#22221F', color: '#A09E94' }}>
        {language}
      </div>

      {/* Copy button */}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded transition-colors duration-200 cursor-pointer z-10"
        style={{ backgroundColor: '#22221F' }}
        title={copied ? 'Copied!' : 'Copy'}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#33332F'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#22221F'}
      >
        {copied ? <Check size={14} color="#4CAF50" /> : <Clipboard size={14} color="#A09E94" />}
      </button>

      {/* Code content */}
      <pre className="p-6 pt-10 overflow-x-auto">
        <code className="table w-full font-mono text-sm" style={{ lineHeight: 1.7 }}>
          {highlightCode(code, language)}
        </code>
      </pre>
    </div>
  );
}
