import styled from "styled-components";
import { COLORS } from "constants/colors";

interface ICatalogItemProps {
  img: string;
}

export const MainWrapper = styled.div`
  box-sizing: border-box;
  padding: 20px 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid ${COLORS.LIGHT_GREY};
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    border: 2px solid ${COLORS.GREY};
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-self: end;
`;

export const StyledPhoto = styled.div<ICatalogItemProps>`
  width: 80%;
  padding-top: 100%;
  background-image: url(${({ img }: ICatalogItemProps) => img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
`;
