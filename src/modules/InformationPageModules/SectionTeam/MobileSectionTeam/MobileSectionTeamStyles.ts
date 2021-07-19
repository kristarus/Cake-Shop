import styled from "styled-components";

interface IStyledPhotoProps {
  img: string;
}

export const Root = styled.div`
  margin-bottom: 80px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SliderWrapper = styled.div`
  width: 70%;
  max-width: 350px;
  margin: 30px auto;
`;

export const StyledPhoto = styled.div<IStyledPhotoProps>`
  padding-top: 120%;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
`;

export const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
`;
