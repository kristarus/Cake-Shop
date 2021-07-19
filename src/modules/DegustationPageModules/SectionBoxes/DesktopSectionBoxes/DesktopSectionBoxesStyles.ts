import styled from "styled-components";

export const Root = styled.div`
  width: 80%;
  margin: 50px auto;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-gap: 50px;
  margin: 30px 0;
`;

export const TextWrapper = styled.div`
  width: 70%;
  display: grid;
  grid-gap: 20px;
  margin: 0 auto;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
`;

export const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  width: 100%;
  margin: 0 auto;
`;
