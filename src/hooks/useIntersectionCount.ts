import { RefObject, useEffect, useRef, useState } from "react";

export function useIntersectionCount(
  ref: RefObject<HTMLElement>,
  maxIntersections: number,
) {
  const [count, setCount] = useState(0);

  const observer = useRef(
    new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setCount((prev) => prev + 1),
      {
        root: null,
        threshold: 0,
      },
    ),
  );

  useEffect(() => {
    const element = ref.current;
    const ob = observer.current;

    if (element && count < maxIntersections) {
      ob.observe(element);
    }

    if (count >= maxIntersections) {
      ob.disconnect();
    }

    return () => ob.disconnect();
  }, [ref, count, maxIntersections]);

  return count;
}
