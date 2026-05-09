'use client';

import { useRef } from 'react';
import type { MouseEvent, ReactNode, CSSProperties } from 'react';

export default function ShineCard({ children, className }: { children: ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--shine-x', `${x}px`);
    card.style.setProperty('--shine-y', `${y}px`);
    card.style.setProperty('--shine-opacity', '1');
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--shine-opacity', '0');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className ?? ''}`}
      style={{ '--shine-x': '50%', '--shine-y': '50%', '--shine-opacity': '0' } as CSSProperties}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-sm"
        style={{
          opacity: 'var(--shine-opacity)',
          background: 'radial-gradient(180px circle at var(--shine-x) var(--shine-y), rgba(255, 198, 0, 0.18), transparent 70%)',
        }}
      />
      {children}
    </div>
  );
}
