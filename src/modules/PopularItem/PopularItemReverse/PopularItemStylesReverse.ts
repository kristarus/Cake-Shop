import { COLORS } from "constants/colors";
import styled from "styled-components";
import { Leaf, Weight } from "assets";

interface IPopularItemProps {
  img: string;
}

export const PopularItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const PopularItemParamsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
export const ParamWrapper = styled.div`
  display: flex;
`;

export const StyledWeight = styled(Weight)`
  width: 20px;
  height: 20px;
  fill: ${COLORS.DARK_GREY};

  @media (min-width: 1700px) {
    width: 40px;
    height: 40px;
  }
`;

export const StyledLeaf = styled(Leaf)`
  width: 20px;
  height: 20px;
  fill: ${COLORS.DARK_GREY};

  @media (min-width: 1700px) {
    width: 40px;
    height: 40px;
  }
`;

export const StyledPhoto = styled.div<IPopularItemProps>`
  width: 95%;
  max-width: 350px;
  padding-top: 95%;
  background-image: url(${({ img }: IPopularItemProps) => img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;

  @media (min-width: 1700px) {
    max-width: 500px;
  }
`;
