import styled from "styled-components";
import { noPhoto } from "assets";

export const Root = styled.div`
  display: grid;
  grid-gap: 20px;
  margin: 150px 0;
  width: 70%;
  margin: 150px auto;

  @media (max-width: 900px) {
    margin: 50px 0;
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainImage = styled.div`
  width: 100%;
  height: max(40vh, 40vw);
  background-image: url(${noPhoto});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
`;

export const TextWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
