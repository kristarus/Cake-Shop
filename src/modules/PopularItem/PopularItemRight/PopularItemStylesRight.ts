import { COLORS } from "constants/colors";
import styled from "styled-components";
import { Leaf, Weight } from "assets";

interface IPopularItemProps {
  img: string;
}

export const PopularItemWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
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
  box-sizing: border-box;
  width: 95%;
  padding-top: 95%;
  background-image: url(${({ img }: IPopularItemProps) => img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;

  @media (min-width: 1700px) {
    max-width: 500px;
    max-height: 500px;
  }
`;
