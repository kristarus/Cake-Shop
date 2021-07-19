import styled from "styled-components";
import { Button } from "@material-ui/core";
import { COLORS } from "constants/colors";

export const IndOrderFormWrapper = styled.form`
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  background-color: rgba(0, 0, 0, 0.15);
`;

export const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  width: 80%;
  margin: 20px 0 10px;
`;

export const TextWrapper = styled.div`
  width: 65%;
  text-align: center;
`;

export const UploadInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledCloseButton = styled(Button)`
  min-width: 0 !important;
  width: 25px !important;
  height: 25px !important;
  margin: 5px !important;
  padding: 0 !important;
  border: 2px solid ${COLORS.DARK_GREY} !important;
  border-radius: 10px !important;
  background-color: ${COLORS.WHITE} !important;
  font-size: 12px !important;
  font-family: OpenSansBold !important;
  color: ${COLORS.DARK_GREY} !important;
  cursor: pointer;
  transition-duration: 0.3s !important;
  &:hover {
    background-color: ${COLORS.DARK_GREY} !important;
    color: ${COLORS.WHITE} !important;
  }
`;

export const ImageNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;
