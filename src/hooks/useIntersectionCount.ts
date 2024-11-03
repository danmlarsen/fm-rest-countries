import { RefObject, useEffect, useRef, useState } from "react";

export function useIntersectionCount(
  ref: RefObject<HTMLElement>,
  maxInterections: number,
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

    if (element && count < maxInterections) {
      ob.observe(element);
    }

    if (count >= maxInterections) {
      ob.disconnect();
    }

    return () => ob.disconnect();
  }, [ref, count, maxInterections]);

  return count;
}
