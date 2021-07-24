import styled from "styled-components";

interface IStyledPhotoProps {
  img: string;
}

export const Root = styled.div`
  width: 80%;
  margin: 0 auto 150px;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 40px;
  margin: 50px;
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
