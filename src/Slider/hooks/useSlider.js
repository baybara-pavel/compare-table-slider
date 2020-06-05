import { useEffect, useRef, useState } from "react";
import { useSpring } from "react-spring";

export function useSlider({ initIndex = 0, itemWidth, count }) {
  const indexState = useState(initIndex);
  const [activeIndex] = indexState;

  const mainContainerRef = useRef();
  const containerWidth =
    (mainContainerRef.current && mainContainerRef.current.offsetWidth) || 0;

  const left = activeIndex * itemWidth * -1;
  const right =
    (count * itemWidth - activeIndex * itemWidth - containerWidth) * -1;

  const [{ xyz }, set] = useSpring(() => ({
    from: {
      xyz: [left, 0, 0]
    }
  }));

  useEffect(() => {
    set({ xyz: [left, 0, 0] });
  }, [left]);

  const showPrevArrow = left !== 0;
  const showNextArrow = right <= 0;

  return {
    indexState,
    xyz,
    showPrevArrow,
    showNextArrow,
    mainContainerRef
  };
}
