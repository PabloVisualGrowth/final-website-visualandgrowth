'use client';

import { useRef } from 'react';
import type { MouseEvent, TouchEvent, ReactNode, CSSProperties } from 'react';

export default function ShineCard({ children, className }: { children: ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const applyShine = (clientX: number, clientY: number) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--shine-x', `${clientX - rect.left}px`);
    card.style.setProperty('--shine-y', `${clientY - rect.top}px`);
    card.style.setProperty('--shine-opacity', '1');
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => applyShine(e.clientX, e.clientY);

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const t = e.touches[0];
    if (t) applyShine(t.clientX, t.clientY);
  };

  const handleTouchEnd = () => {
    const card = cardRef.current;
    if (card) card.style.setProperty('--shine-opacity', '0');
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) card.style.setProperty('--shine-opacity', '0');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`relative overflow-hidden ${className ?? ''}`}
      style={{ '--shine-x': '50%', '--shine-y': '50%', '--shine-opacity': '0' } as CSSProperties}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-sm"
        style={{
          opacity: 'var(--shine-opacity)',
          transition: 'opacity 0.3s',
          background: 'radial-gradient(180px circle at var(--shine-x) var(--shine-y), rgba(255, 198, 0, 0.22), transparent 70%)',
        }}
      />
      {children}
    </div>
  );
}
