import { COLORS } from "constants/colors";
import styled from "styled-components";
import { Select, MenuItem } from "@material-ui/core";

interface IStyledSelectProps {
  width: string;
  disabled: boolean;
}

export const StyledSelect = styled(Select)<IStyledSelectProps>`
  position: relative !important;
  font-family: OpenSansLight !important;
  width: ${({ width }: IStyledSelectProps) => width};
  min-width: 100px;
  max-width: 200px;
  background-color: ${COLORS.LIGHT_GREY};
  padding: 7px;
  border-radius: 10px;
  cursor: pointer;
  color: ${({ disabled }: IStyledSelectProps) =>
    disabled ? COLORS.GREY : COLORS.DARK_GREY} !important;

  &:before {
    border-bottom: 2px solid
      ${({ disabled }: IStyledSelectProps) =>
        disabled ? COLORS.GREY : COLORS.DARK_GREY} !important;
  }

  &:after {
    border-bottom: 2px solid ${COLORS.GREY} !important;
  }

  .MuiSelect-select {
    &:focus {
      background-color: ${COLORS.LIGHT_GREY} !important;
      color: ${COLORS.GREY} !important;
    }
  }

  @media (min-width: 1700px) {
    font-size: 22px !important;
  }

  @media (min-width: 1200px) and (max-width: 1699px) {
    font-size: 18px !important;
  }

  @media (max-width: 1199px) {
    font-size: 16px !important;
  }
`;

export const StyledOption = styled(MenuItem)`
  font-family: OpenSansLight !important;
  cursor: pointer;

  @media (min-width: 1700px) {
    font-size: 22px !important;
  }

  @media (min-width: 1200px) and (max-width: 1699px) {
    font-size: 18px !important;
  }

  @media (max-width: 1199px) {
    font-size: 16px !important;
  }
`;
