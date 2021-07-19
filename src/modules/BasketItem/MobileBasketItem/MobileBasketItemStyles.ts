import styled from "styled-components";
import { COLORS } from "constants/colors";
import { Button } from "@material-ui/core";

interface IBasketItemProps {
  img: string;
}

export const Root = styled.form`
  background: ${COLORS.LIGHT_GREY};
  position: relative;
  padding: 20px 10px;
`;

export const MainWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  align-items: center;
`;

export const BasketItemParamsWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  justify-items: center;
`;

export const StyledPhoto = styled.div<IBasketItemProps>`
  min-width: 100px;
  padding-top: 100%;
  background-image: url(${({ img }: IBasketItemProps) => img});
  background-size: cover;
  background-position-x: center;
`;

export const StyledCloseButton = styled(Button)`
  position: absolute !important;
  right: 5px;
  top: 5px;
  min-width: 0 !important;
  width: 25px !important;
  height: 25px !important;
  margin: 5px !important;
  padding: 0 !important;
  border: 2px solid ${COLORS.GREY} !important;
  border-radius: 10px !important;
  background-color: ${COLORS.LIGHT_GREY} !important;
  font-size: 12px !important;
  font-family: OpenSansBold !important;
  color: ${COLORS.GREY} !important;
  cursor: pointer;
  transition-duration: 0.3s !important;
  &:hover {
    background-color: ${COLORS.GREY} !important;
    color: ${COLORS.WHITE} !important;
  }
`;

export const CountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledChangeButton = styled(Button)`
  min-width: 0 !important;
  margin: 5px !important;
  padding: 0 !important;
  border: none;
  border-bottom: 2px solid ${COLORS.GREY} !important;
  background-color: ${COLORS.LIGHT_GREY} !important;
  font-size: 14px !important;
  font-family: OpenSansBold !important;
  color: ${COLORS.GREY} !important;
  cursor: pointer;
  transition-duration: 0.3s !important;
  &:hover {
    color: ${COLORS.DARK_GREY} !important;
  }
`;
