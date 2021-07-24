import styled from "styled-components";

export const Root = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;

  @media (min-width: 701px) and (max-width: 916px) {
    width: 70%;
  }

  @media (max-width: 700px) {
    width: 80%;
  }
`;

export const TextWrapper = styled.div`
  margin: 20px 0 30px;
`;
