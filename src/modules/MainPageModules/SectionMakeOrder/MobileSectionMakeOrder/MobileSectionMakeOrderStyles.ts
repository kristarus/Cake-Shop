import styled from "styled-components";
import { COLORS } from "constants/colors";

export const Root = styled.div`
  margin: 0;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.LIGHT_GREY};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeader = styled.div`
  height: 120px;
  width: 100%;
  position: relative;
`;

export const StyledText = styled.div`
  z-index: 0;
  position: absolute;
  width: fit-content;
  left: 0;
  top: 33%;
  right: 0;
  margin: auto;
`;

export const HeaderBG = styled.div`
  z-index: 0;
  font-family: OpenSansBold !important;
  font-size: 100px;
  position: absolute;
  padding: 0;
  margin: auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  color: ${COLORS.GREY};
  opacity: 0.3;
  width: fit-content;
  height: fit-content;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;
