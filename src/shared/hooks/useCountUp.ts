import { useEffect, useState } from 'react';

export const useCountUp = (
  end: number, 
  duration: number = 2000,
  startAnimation: boolean = false
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev >= end) {
          clearInterval(timer);
          return end;
        }
        return Math.min(prev + increment, end);
      });
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, startAnimation]);

  return Math.floor(count);
};
