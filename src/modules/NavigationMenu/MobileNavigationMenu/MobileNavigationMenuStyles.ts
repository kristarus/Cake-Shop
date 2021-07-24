import { COLORS } from "constants/colors";
import styled from "styled-components";
import { Drawer, ListItemText } from "@material-ui/core";
import { MenuIcon, BasketIcon, Logo } from "assets";

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: ${COLORS.WHITE};
  z-index: 1;
`;

export const StyledMenuIcon = styled(MenuIcon)`
  fill: ${COLORS.DARK_GREY};
  width: 50%;
  height: 50%;
`;

export const StyledBasketIcon = styled(BasketIcon)`
  fill: ${COLORS.DARK_GREY};
  &:hover {
    fill: ${COLORS.GREY};
  }
`;

export const StyledLogo = styled.div`
  width: 150px;
  padding-top: 60%;
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
`;

export const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 170px;
  }
`;

export const StyledListItemText = styled(ListItemText)`
  .MuiTypography-body1 {
    font-family: OpenSansLight !important;
    font-size: 1.2rem;
    color: ${COLORS.DARK_GREY};
  }
`;
