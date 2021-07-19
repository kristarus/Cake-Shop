import styled from "styled-components";
import { DottedLine, orderBG } from "assets";
import { COLORS } from "constants/colors";

export const Root = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${orderBG});
  background-size: 100% 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledHeader = styled.div`
  height: 120px;
  width: 100%;
  position: relative;
`;

export const StyledText = styled.div`
  z-index: 10;
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
  width: 15%;
`;

export const DottedLineRight = styled(DottedLine)`
  width: 20%;
  fill: ${COLORS.GREY};
  opacity: 0.3;
`;

export const DottedLineReversed = styled(DottedLine)`
  width: 20%;
  fill: ${COLORS.GREY};
  opacity: 0.3;
  transform: rotate(180deg);
`;
