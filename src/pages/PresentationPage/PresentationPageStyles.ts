import styled from "styled-components";
import { BasketIcon } from "assets";
import { COLORS } from "constants/colors";

export const StyledBasketIcon = styled(BasketIcon)`
  fill: ${COLORS.DARK_GREY};
  &:hover {
    fill: ${COLORS.GREY};
  }
`;
