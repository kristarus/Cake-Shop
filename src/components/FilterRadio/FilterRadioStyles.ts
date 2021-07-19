import styled from "styled-components";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import { COLORS } from "constants/colors";

export const StyledFormControlLabel = styled(FormControlLabel)`
  .MuiTypography-body1 {
    font-family: OpenSansLight !important;
  }
  color: ${COLORS.DARK_GREY} !important;
  @media (min-width: 1700px) {
    .MuiTypography-body1 {
      font-size: 22px !important;
    }
  }

  @media (min-width: 1200px) and (max-width: 1699px) {
    .MuiTypography-body1 {
      font-size: 18px !important;
    }
  }

  @media (max-width: 1199px) {
    .MuiTypography-body1 {
      font-size: 16px !important;
    }
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  font-family: OpenSansLight !important;
  color: ${COLORS.DARK_GREY} !important;
  width: 15px;
  height: 15px;
`;
