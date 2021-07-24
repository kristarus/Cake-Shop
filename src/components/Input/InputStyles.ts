import { TextField } from "@material-ui/core";
import styled from "styled-components";
import { COLORS } from "constants/colors";

interface IInputProps {
  width: string;
  bordercolor: string;
}

export const StyledInput = styled(TextField)<IInputProps>`
  width: ${({ width }) => width} !important;
  .MuiInputBase-root {
    font-family: OpenSansLight !important;
    color: ${COLORS.DARK_GREY};
    background-color: ${COLORS.WHITE};
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  .MuiOutlinedInput-multiline {
    padding: 0 !important;
  }

  .MuiOutlinedInput-root {
    border-radius: 10px;
  }
  .MuiOutlinedInput-input {
    padding: 13px;
    border: 2px solid ${({ bordercolor }) => bordercolor};
    border-radius: 10px;
    outline: none;
    &:hover {
      border: 2px solid ${COLORS.GREY};
    }
    &:focus {
      border: 2px solid ${COLORS.GREY};
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
  }
`;
