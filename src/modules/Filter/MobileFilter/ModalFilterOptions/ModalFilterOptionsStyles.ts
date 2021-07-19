import styled from "styled-components";
import { COLORS } from "constants/colors";

export const Root = styled.div`
  width: 100%;
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
  height: 90vh;
  max-width: 500px;
  overflow: scroll;
  background-color: ${COLORS.WHITE};
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 10px;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;
