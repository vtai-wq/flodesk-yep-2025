'use client';

import { useEffect } from 'react';
import confetti from 'canvas-confetti';

interface ConfettiProps {
  trigger?: boolean;
}

export default function Confetti({ trigger = true }: ConfettiProps) {
  useEffect(() => {
    if (!trigger) return;

    // Initial burst
    const duration = 2000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ['#000000', '#FFD700', '#333333', '#E6C200'],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ['#000000', '#FFD700', '#333333', '#E6C200'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    // Small delay before starting
    const timeout = setTimeout(() => {
      frame();
    }, 300);

    return () => clearTimeout(timeout);
  }, [trigger]);

  return null;
}
