import styled from "styled-components";
import { Button } from "@material-ui/core";

interface IStyledButtonProps {
  backgroundcolor: string;
  bordercolor: string;
  textcolor: string;
}

export const StyledButton = styled(Button)<IStyledButtonProps>`
  padding: 10px 20px !important;
  width: fit-content !important;
  border: 2px solid ${({ bordercolor }: IStyledButtonProps) => bordercolor} !important;
  border-radius: 10px !important;
  background-color: ${({ backgroundcolor }: IStyledButtonProps) =>
    backgroundcolor} !important;
  font-family: OpenSansLight !important;
  color: ${({ textcolor }: IStyledButtonProps) => textcolor} !important;
  cursor: pointer;
  transition-duration: 0.3s !important;
  &:hover {
    background-color: ${({ textcolor }: IStyledButtonProps) =>
      textcolor} !important;
    color: ${({ backgroundcolor }: IStyledButtonProps) =>
      backgroundcolor} !important;
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
