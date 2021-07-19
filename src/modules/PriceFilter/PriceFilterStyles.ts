import styled from "styled-components";
import { COLORS } from "constants/colors";

export const MainWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: fit-content;
  align-items: end;
  background: ${COLORS.WHITE};
`;

export const InputsWrapper = styled.div`
  display: flex;
  align-items: center;
`;
