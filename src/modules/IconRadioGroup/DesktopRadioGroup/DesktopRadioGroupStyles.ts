import styled from "styled-components";
import { PieceOfCake } from "assets";
import { RadioGroup } from "@material-ui/core";
import { COLORS } from "constants/colors";

export const UnselectedPieceOfCake = styled(PieceOfCake)`
  fill: ${COLORS.DARK_GREY};
  margin-right: 7px;
  width: 20px;
  height: 20px;

  @media (min-width: 1700px) {
    width: 50px;
    height: 50px;
  }
`;

export const SelectedPieceOfCake = styled(PieceOfCake)`
  fill: ${COLORS.LIGHT_GREY};
  margin-right: 7px;
  width: 20px;
  height: 20px;

  @media (min-width: 1700px) {
    width: 50px;
    height: 50px;
  }
`;

export const WrapperIconSelected = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background-color: ${COLORS.DARK_GREY};

  @media (min-width: 1700px) {
    width: 150px;
    height: 150px;
  }
`;

export const WrapperIconUnselected = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background-color: ${COLORS.LIGHT_GREY};

  @media (min-width: 1700px) {
    width: 150px;
    height: 150px;
  }
`;

export const StyledRadioGroup = styled(RadioGroup)`
  display: flex;
  flex-direction: row !important;
  justify-content: space-around;
`;
