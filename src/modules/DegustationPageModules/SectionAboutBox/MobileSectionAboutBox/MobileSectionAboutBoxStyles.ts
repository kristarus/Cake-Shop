import styled from "styled-components";
import { degustationImage } from "assets";

export const Root = styled.div`
  width: 90%;
  margin: 120px auto 50px;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  justify-content: center;
  justify-items: center;
`;

export const StyledImage = styled.div`
  width: 100%;
  padding-top: 80%;
  background-image: url(${degustationImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;

  @media (min-width: 500px) {
    width: 70%;
    padding-top: 55%;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 20px;
`;
