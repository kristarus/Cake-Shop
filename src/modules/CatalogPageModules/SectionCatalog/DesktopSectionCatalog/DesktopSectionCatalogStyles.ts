import { COLORS } from "constants/colors";
import styled from "styled-components";
import { noPhoto } from "assets";

interface ICatalogItemsWrapperProps {
  size: number;
}

export const Root = styled.div``;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 0fr 1fr;
  grid-template-rows: 0fr;
  grid-gap: 30px;
  padding: 100px 0 30px;
  width: 80%;
  margin-left: 50px;
`;

export const HeaderWrapper = styled.div`
  padding: 40px 0 40px;
  background-color: ${COLORS.LIGHT_GREY};
`;

export const CatalogItemsWrapper = styled.div<ICatalogItemsWrapperProps>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 0fr;
  overflow-y: scroll;
  grid-gap: 30px;
  width: 100%;
  height: ${({ size }: ICatalogItemsWrapperProps) => size};
  min-height: max(50vh, 50vw);
  margin: 0 auto;
  padding: 0 20px;
`;
