import styled from "styled-components";

interface IBasketItemsWrapperProps {
  size: number;
  scroll: boolean;
}

export const Root = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-rows: 1fr;
  grid-template-columns: 3fr 2fr;
  width: 90%;
  margin: 20px auto 150px;
`;

export const BasketWrapper = styled.div`
  display: grid;
  grid-template-rows: 0fr 1fr;
  grid-gap: 20px;
  align-items: start;
`;

export const BasketFormWrapper = styled.div`
  display: grid;
  grid-template-rows: 0fr 1fr;

  grid-gap: 20px;
  align-items: start;
`;

export const BasketItemsWrapper = styled.div<IBasketItemsWrapperProps>`
  display: grid;
  grid-gap: 20px;
  height: fit-content;
  max-height: ${({ size }: IBasketItemsWrapperProps) => size + "px"};
  overflow-y: ${({ scroll }: IBasketItemsWrapperProps) =>
    scroll ? "scroll" : "auto"};
  align-items: start;
`;

export const FormWrapper = styled.div``;
