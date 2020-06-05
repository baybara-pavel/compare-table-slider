import React, { forwardRef } from "react";
import { animated, interpolate } from "react-spring";

import { Wrapper, ArrowNext, ArrowPrev } from "./Slider.sltyles";
export const Slider = forwardRef(
  (
    {
      xyz = [0, 0, 0],
      children,
      showArrows = true,
      showPrevArrow = true,
      showNextArrow = true,
      renderNextArrow,
      rendePrevArrow,
      onClickNext,
      onClickPrev,
      onPositionChange
    },
    ref
  ) => {
    return (
      <Wrapper>
        {showArrows && showPrevArrow && (
          <ArrowPrev onClick={onClickPrev}>{`<`}</ArrowPrev>
        )}
        <animated.div
          ref={ref}
          style={{
            transform: interpolate(
              xyz,
              (x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`
            )
          }}
        >
          {children}
        </animated.div>
        {showArrows && showNextArrow && (
          <ArrowNext onClick={onClickNext}>{`>`}</ArrowNext>
        )}
      </Wrapper>
    );
  }
);
