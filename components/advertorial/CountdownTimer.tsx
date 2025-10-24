'use client';

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetHours?: number; // Default 24 hours
  variant?: 'inline' | 'large';
  showLabel?: boolean;
}

export default function CountdownTimer({
  targetHours = 24,
  variant = 'inline',
  showLabel = true
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Calculate end time (targetHours from now)
    const endTime = new Date().getTime() + targetHours * 60 * 60 * 1000;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetHours]);

  if (variant === 'inline') {
    return (
      <span className="font-mono font-bold">
        {String(timeLeft.hours).padStart(2, '0')}:
        {String(timeLeft.minutes).padStart(2, '0')}:
        {String(timeLeft.seconds).padStart(2, '0')}
      </span>
    );
  }

  // Large variant
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="flex flex-col items-center bg-white rounded-lg px-4 py-3 min-w-[80px]">
        <div className="text-3xl font-black text-[#FF8852] font-mono">
          {String(timeLeft.hours).padStart(2, '0')}
        </div>
        {showLabel && (
          <div className="text-xs text-neutral-600 font-semibold uppercase mt-1">
            Часа
          </div>
        )}
      </div>

      <div className="text-3xl font-black text-white">:</div>

      <div className="flex flex-col items-center bg-white rounded-lg px-4 py-3 min-w-[80px]">
        <div className="text-3xl font-black text-[#FF8852] font-mono">
          {String(timeLeft.minutes).padStart(2, '0')}
        </div>
        {showLabel && (
          <div className="text-xs text-neutral-600 font-semibold uppercase mt-1">
            Минути
          </div>
        )}
      </div>

      <div className="text-3xl font-black text-white">:</div>

      <div className="flex flex-col items-center bg-white rounded-lg px-4 py-3 min-w-[80px]">
        <div className="text-3xl font-black text-[#FF8852] font-mono">
          {String(timeLeft.seconds).padStart(2, '0')}
        </div>
        {showLabel && (
          <div className="text-xs text-neutral-600 font-semibold uppercase mt-1">
            Секунди
          </div>
        )}
      </div>
    </div>
  );
}
