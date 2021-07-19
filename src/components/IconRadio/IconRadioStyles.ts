import styled from "styled-components";
import { Radio, FormControlLabel } from "@material-ui/core";
import { COLORS } from "constants/colors";

export const StyledRadio = styled(Radio)`
  color: ${COLORS.DARK_GREY} !important;
  .MuiSvgIcon-root {
    width: 30px;
    height: 30px;
  }
`;
export const RadioWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 170px;
  align-items: center;

  @media (min-width: 1700px) {
    width: 300px;
  }
`;
export const IconSizeWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 140px;
  align-items: center;

  @media (min-width: 1700px) {
    width: 250px;
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  margin-left: 0 !important;
  margin-right: 0 !important;
  .MuiTypography-body1 {
    font-family: OpenSansBold;
    font-size: 24px;
    color: ${COLORS.DARK_GREY};
  }
`;
