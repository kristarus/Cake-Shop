import styled from "styled-components";

interface IStyledPhotoProps {
  img: string;
}

export const Root = styled.div`
  width: 90%;
  margin: 100px auto 50px;
`;

export const ContentWrapper = styled.div`
  margin: 20px auto;
`;

export const PhotoWrapper = styled.div`
  display: grid;
  grid-template-columns: 0fr 0fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;
  justify-content: center;
  margin: 20px 0;
`;

export const StyledPhoto = styled.div<IStyledPhotoProps>`
  padding-top: 120%;
  width: min(40vh, 40vw);
  background-image: url(${({ img }: IStyledPhotoProps) => img});
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
`;

export const BackgroundPhoto = styled.div<IStyledPhotoProps>`
  height: calc(min(40vh, 40vw) * 1.5);
  background-image: url(${({ img }: IStyledPhotoProps) => img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  align-self: start;
`;

export const TextWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
`;
