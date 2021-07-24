import styled from "styled-components";
import { mainBG } from "assets";

export const Root = styled.div`
  background-image: url(${mainBG});
  background-size: 60% 20%;
  background-repeat: no-repeat;

  @media (max-width: 916px) {
    background-image: url();
  }
`;
