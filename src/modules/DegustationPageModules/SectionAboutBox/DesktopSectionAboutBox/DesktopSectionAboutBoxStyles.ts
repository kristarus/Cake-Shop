import styled from "styled-components";
import { degustationImage } from "assets";

export const Root = styled.div`
  width: 80%;
  margin: 50px auto 150px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;

export const StyledImage = styled.div`
  width: 40%;
  padding-top: 30%;
  background-image: url(${degustationImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
`;

export const TextWrapper = styled.div`
  width: 50%;
  display: grid;
  grid-gap: 20px;
`;
