import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export function useCountIncrement(initialCount, totalNumber, round = true) {
  const [count, setCount] = useState(initialCount);
  const increment = totalNumber / (0.1 * 1000);
  const ref = useRef();
  const inView = useInView(ref, { once: true, root: '20000px' });

  useEffect(() => {
    if (inView) {
      let timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount + increment < totalNumber) {
            return prevCount + increment;
          } else {
            clearInterval(timer);
            return totalNumber;
          }
        });
      }, 10);
      return () => {
        clearInterval(timer);
      };
    }
  }, [increment, totalNumber, inView]);

  let sentCount = +count.toFixed(1);
  if (!round) {
    sentCount = Math.floor(count);
  }
  return [sentCount, ref];
}
