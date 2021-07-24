import styled from "styled-components";
import { COLORS } from "constants/colors";
import { Button } from "@material-ui/core";

interface IBasketItemProps {
  img: string;
}

export const TextWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin: 0 10px;
  width: 50%;
  @media (min-width: 1100px) {
    width: 60%;
  }
`;

export const MainWrapper = styled.form`
  box-sizing: border-box;
  position: relative !important;
  padding: 20px;
  padding-right: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${COLORS.LIGHT_GREY};
`;

export const BasketItemParamsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 15px 10px;
`;

export const ParamsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
`;

export const SelectWrapper = styled.div``;

export const CountPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  min-width: 200px;

  @media (min-width: 1100px) {
    width: 40%;
  }
`;

export const CountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledPhoto = styled.div<IBasketItemProps>`
  width: 130px;
  height: 130px;
  background-image: url(${({ img }: IBasketItemProps) => img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
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
