import styled from "styled-components";
import { COLORS } from "constants/colors";
import { Button } from "@material-ui/core";

export const ItemCounterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledCounterButton = styled(Button)`
  min-width: 0 !important;
  width: 25px !important;
  height: 25px !important;
  margin: 5px !important;
  padding: 0 !important;
  border: 2px solid ${COLORS.DARK_GREY} !important;
  border-radius: 50% !important;
  background-color: ${COLORS.WHITE} !important;
  font-size: 12px !important;
  font-family: OpenSansBold !important;
  color: ${COLORS.DARK_GREY} !important;
  cursor: pointer;
  transition-duration: 0.3s !important;
  &:hover {
    background-color: ${COLORS.DARK_GREY} !important;
    color: ${COLORS.WHITE} !important;
  }
`;
