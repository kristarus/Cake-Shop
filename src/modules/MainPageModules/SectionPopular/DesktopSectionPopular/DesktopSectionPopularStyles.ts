import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 150px 0;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10%;
  width: 80%;
  margin: 50px auto;
`;
