import { COLORS } from "constants/colors";
import styled from "styled-components";

export const Root = styled.div`
  display: grid;
  grid-gap: 20px;
  justify-items: center;
  margin-top: 100px;
  margin-bottom: 50px;
`;

export const BasketWrapper = styled.div`
  display: grid;
  width: 90%;
  grid-template-rows: 0fr 1fr;
  grid-gap: 20px;
  align-items: start;
`;

export const BasketItemsWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export const ButtonWrapper = styled.div`
  width: fit-content;
`;
