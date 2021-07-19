import { COLORS } from "constants/colors";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { BasketIcon, Logo } from "assets";

export const StyledMenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  color: ${COLORS.DARK_GREY};
  font-family: OpenSansLight;
`;

export const MenuItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
`;

export const StyledMenuBarItem = styled(Button)`
  display: flex;
  color: ${COLORS.DARK_GREY} !important;
  font-family: OpenSansLight !important;
  &:hover {
    text-decoration: underline !important;
    background-color: transparent !important;
  }
  @media (min-width: 1700px) {
    font-size: 30px !important;
  }

  @media (min-width: 1200px) and (max-width: 1699px) {
    font-size: 22px !important;
  }

  @media (max-width: 1199px) {
    font-size: 20px !important;
  }
`;

export const StyledBasketIcon = styled(BasketIcon)`
  fill: ${COLORS.DARK_GREY};
  &:hover {
    fill: ${COLORS.GREY};
  }
  @media (min-width: 1700px) {
    width: 30px;
    height: 30px;
  }
`;

export const StyledLogo = styled.div`
  width: 200px;
  height: 100px;
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
`;
