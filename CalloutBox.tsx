import { Lightbulb, AlertTriangle } from 'lucide-react';

interface CalloutBoxProps {
  type: 'tip' | 'warning';
  content: string;
}

export default function CalloutBox({ type, content }: CalloutBoxProps) {
  const isTip = type === 'tip';

  return (
    <div
      className="my-6 rounded-r-lg flex gap-4"
      style={{
        backgroundColor: isTip ? '#1E2A1E' : '#2A1E1E',
        borderLeft: `4px solid ${isTip ? '#4CAF50' : '#E86141'}`,
        padding: '20px 24px',
      }}
    >
      <div className="shrink-0 mt-0.5">
        {isTip ? (
          <Lightbulb size={20} color="#4CAF50" />
        ) : (
          <AlertTriangle size={20} color="#E86141" />
        )}
      </div>
      <div
        className="font-dm text-[15px] leading-relaxed"
        style={{ color: '#F2F1E9' }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
