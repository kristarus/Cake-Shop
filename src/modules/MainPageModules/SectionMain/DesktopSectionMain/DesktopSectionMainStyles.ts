import styled from "styled-components";
import { mainImage } from "assets";

export const Root = styled.div``;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 500px;
`;

export const MainImage = styled.div`
  width: 40%;
  height: 100%;
  background-image: url(${mainImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
`;

export const TextWrapper = styled.div`
  padding: 20px 0;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
