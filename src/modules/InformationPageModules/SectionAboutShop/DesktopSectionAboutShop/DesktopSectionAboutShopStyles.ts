import styled from "styled-components";

interface IStyledPhotoProps {
  img: string;
}

export const Root = styled.div`
  width: 80%;
  margin: 20px auto 0;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  align-items: center;
  grid-gap: 10px 80px;
  margin: 50px auto 0;
`;

export const PhotoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;
`;

export const StyledPhoto = styled.div<IStyledPhotoProps>`
  position: relative;
  background-image: url(${({ img }: IStyledPhotoProps) => img});
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  padding-top: 120%;
`;

export const BackgroundPhoto = styled.div<IStyledPhotoProps>`
  height: 400px;
  background-image: url(${({ img }: IStyledPhotoProps) => img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  align-self: start;

  @media (min-width: 1200px) and (max-width: 1599px) {
    height: 500px !important;
  }
  @media (min-width: 1600px) {
    height: 600px !important;
  }
`;

export const TextWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
`;
