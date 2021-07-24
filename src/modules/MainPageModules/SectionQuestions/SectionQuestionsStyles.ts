import styled from "styled-components";

export const Root = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-gap: 20px;
  margin: 150px 0;
  width: 70%;
  margin: 150px auto;
  padding: 0 10px;

  @media (max-width: 900px) {
    margin: 50px 0;
    width: 100%;
  }
`;
