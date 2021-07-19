import styled from "styled-components";

export const Root = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;

  @media (max-width: 700px) {
    width: 80%;
  }
`;

export const TextWrapper = styled.div`
  margin: 20px 0 30px;
`;
