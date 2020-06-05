import styled from "styled-components";
import { Item } from "../Table.styles";

export const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #dfe1e5;
  margin-bottom: 24px;
`;

export const Cross = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

export const ItemStyled = styled(Item)`
  padding-top: 32px;
  padding-bottom: 24px;
`;
