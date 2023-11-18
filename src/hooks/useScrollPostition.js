import { useState, useEffect } from 'react';

function useScrollPosition(position = 200) {
  const [scrollY, setScrollY] = useState(0);
  const [isTracking, setIsTracking] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (isTracking) {
        setScrollY(window.scrollY);
      }

      // Check if scrollY reaches 200 and stop tracking
      if (window.scrollY >= position && isTracking) {
        setIsTracking(false);
      }

      // Check if scrollY returns to 0 and resume tracking
      if (window.scrollY <= position && !isTracking) {
        setIsTracking(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isTracking, position]);

  return scrollY;
}

export default useScrollPosition;
