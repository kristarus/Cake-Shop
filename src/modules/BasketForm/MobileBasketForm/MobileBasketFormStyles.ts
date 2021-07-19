import styled from "styled-components";
import { COLORS } from "constants/colors";
import { Button } from "@material-ui/core";

interface IContentWrapperProps {
  align: "flex-end" | "center";
  margin: string;
}

export const BasketFormWrapper = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 20px;
  background-color: ${COLORS.LIGHT_GREY};
`;

export const InputsWrapper = styled.div`
  margin: 10px 0;
  display: grid;
  justify-items: center;
  grid-gap: 10px;
`;

export const DeliveryWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContentWrapper = styled.div<IContentWrapperProps>`
  margin: ${({ margin }: IContentWrapperProps) => margin};
  display: flex;
  justify-content: ${({ align }: IContentWrapperProps) => align};
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledModal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10000;
`;

export const StyledModalWindow = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  max-height: 90vh;
  max-width: 500px;
  overflow: scroll;
  background-color: ${COLORS.WHITE};
`;

export const StyledCloseButton = styled(Button)`
  position: absolute !important;
  right: 5px;
  top: 5px;
  min-width: 0 !important;
  width: 25px !important;
  height: 25px !important;
  margin: 5px !important;
  padding: 0 !important;
  border: 2px solid ${COLORS.GREY} !important;
  border-radius: 10px !important;
  background-color: ${COLORS.LIGHT_GREY} !important;
  font-size: 12px !important;
  font-family: OpenSansBold !important;
  color: ${COLORS.GREY} !important;
  cursor: pointer;
  transition-duration: 0.3s !important;
  &:hover {
    background-color: ${COLORS.GREY} !important;
    color: ${COLORS.WHITE} !important;
  }
`;
