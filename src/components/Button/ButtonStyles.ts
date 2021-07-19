import styled from "styled-components";
import { Button } from "@material-ui/core";

interface IStyledButtonProps {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
}

export const StyledButton = styled(Button)<IStyledButtonProps>`
  padding: 10px 20px !important;
  width: fit-content !important;
  border: 2px solid ${({ borderColor }: IStyledButtonProps) => borderColor} !important;
  border-radius: 10px !important;
  background-color: ${({ backgroundColor }: IStyledButtonProps) =>
    backgroundColor} !important;
  font-family: OpenSansLight !important;
  color: ${({ textColor }: IStyledButtonProps) => textColor} !important;
  cursor: pointer;
  transition-duration: 0.3s !important;
  &:hover {
    background-color: ${({ textColor }: IStyledButtonProps) =>
      textColor} !important;
    color: ${({ backgroundColor }: IStyledButtonProps) =>
      backgroundColor} !important;
  }
  @media (min-width: 1700px) {
    font-size: 20px !important;
  }

  @media (min-width: 1200px) and (max-width: 1699px) {
    font-size: 16px !important;
  }

  @media (max-width: 1199px) {
    font-size: 14px !important;
  }
`;
