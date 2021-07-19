import { COLORS } from "constants/colors";
import styled from "styled-components";
import { Menu, MenuItem, Button } from "@material-ui/core";

export const StyledButton = styled(Button)`
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

export const StyledMenu = styled(Menu)`
  font-family: OpenSansLight !important;
`;

export const StyledMenuItem = styled(MenuItem)`
  color: ${COLORS.DARK_GREY} !important;
  font-family: OpenSansLight !important;
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
