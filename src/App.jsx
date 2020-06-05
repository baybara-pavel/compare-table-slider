import React, { useState } from "react";
import { Wrapper, CollapseStyled } from "./App.styles";
import { Slider } from "./Slider/Slider";
import { useSlider } from "./Slider/hooks/useSlider";
import { TableHeader } from "./Table/TableHeader/TableHeader";
import { TableContent } from "./Table/TableContent/TableContent";

import { COMPARE_LIST } from "./stubs/compareList.stubs";
import { TABLE_LAYOUT } from "./constants/layouts";
import { TITLES } from "./constants/titles";

const itemWidth = 328;
export default function App() {
  const [list, setList] = useState(COMPARE_LIST);

  const {
    xyz,
    showPrevArrow,
    showNextArrow,
    mainContainerRef,
    indexState
  } = useSlider({
    itemWidth,
    count: list.length
  });
  const [, setActiveIndex] = indexState;

  return (
    <Wrapper>
      <Slider
        {...{ xyz, showPrevArrow, showNextArrow }}
        ref={mainContainerRef}
        onClickNext={() => setActiveIndex(prev => prev + 1)}
        onClickPrev={() => setActiveIndex(prev => prev - 1)}
      >
        <TableHeader
          itemWidth={itemWidth}
          items={list}
          onItemCloseClick={index =>
            setList(prev => {
              const next = [...prev];
              next.splice(index, 1);
              return next;
            })
          }
        />
      </Slider>

      {TABLE_LAYOUT.groups.map(group => (
        <CollapseStyled title={TITLES[group.key]} key={`collapse-${group.key}`}>
          <Slider xyz={xyz} showArrows={false}>
            <TableContent
              itemWidth={itemWidth}
              items={list}
              layoutRows={group.values}
            />
          </Slider>
        </CollapseStyled>
      ))}
    </Wrapper>
  );
}
