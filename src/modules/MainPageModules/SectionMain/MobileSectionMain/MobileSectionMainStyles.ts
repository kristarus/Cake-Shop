import styled from "styled-components";
import { mainImage } from "assets";

export const Root = styled.div`
  padding-top: 100px;
  margin-bottom: 50px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainImage = styled.div`
  width: 100%;
  height: max(40vh, 40vw);
  background-image: url(${mainImage});
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
