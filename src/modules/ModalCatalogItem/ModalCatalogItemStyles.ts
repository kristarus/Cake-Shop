import styled from "styled-components";
import { COLORS } from "constants/colors";
import { Leaf, Weight } from "assets";
import { Button } from "@material-ui/core";

interface IModalCatalogItemProps {
  img: string;
}

export const StyledPhoto = styled.div<IModalCatalogItemProps>`
  width: 80%;
  padding-top: 80%;
  background-image: url(${({ img }: IModalCatalogItemProps) => img});
  background-size: cover;
  background-position-x: center;
`;

export const ModalCatalogItemParamsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
export const ParamWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledWeight = styled(Weight)`
  width: 15px;
  height: 15px;
  fill: ${COLORS.DARK_GREY};
`;

export const StyledLeaf = styled(Leaf)`
  width: 15px;
  height: 15px;
  fill: ${COLORS.DARK_GREY};
`;

export const CounterWrapper = styled.div`
  margin-bottom: 1rem;
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
  max-width: 500px;
  max-height: 90vh;
  overflow: scroll;
  margin-right: -50%;
  padding: 2rem;
  transform: translate(-50%, -50%);
  background-color: ${COLORS.WHITE};
  z-index: 10000;
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
  background-color: ${COLORS.WHITE} !important;
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
