import React from "react";
import { Item } from "../Table.styles";
import { Wrapper, Title, Row } from "./TableContent.styles";
import { TITLES } from "../../constants/titles";

export function TableContent({ itemWidth = 100, items = [], layoutRows }) {
  return (
    <Wrapper>
      {layoutRows.map(key => (
        <Row key={key}>
          <Title>{TITLES[key]}</Title>
          {items.map(item => {
            return (
              <Item
                itemWidth={itemWidth}
                key={`${item.id}${item.attributes[key]}`}
              >
                {item.attributes[key]}
              </Item>
            );
          })}
        </Row>
      ))}
    </Wrapper>
  );
}
