import styled from "styled-components";
import { noPhoto } from "assets";
import { COLORS } from "constants/colors";

export const Root = styled.div``;

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 0;
  padding: 120px 0 20px;
  background-color: ${COLORS.LIGHT_GREY};
  display: flex;
  justify-content: space-around;
`;

export const CatalogItemsWrapper = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  width: 100%;
  margin: 200px auto 20px;
  padding: 0 10px;
`;

export const ButtonWrapper = styled.div`
  padding: 200px 0 0;
`;
