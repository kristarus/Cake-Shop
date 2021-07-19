import styled from "styled-components";
import { COLORS } from "constants/colors";
import { Leaf, Weight } from "assets";

interface IDegustationItemProps {
  img: string;
}

export const MainWrapper = styled.div`
  box-sizing: border-box;
  padding: 20px 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid ${COLORS.GREY};
  align-items: center;
`;

export const StyledPhoto = styled.div<IDegustationItemProps>`
  width: 90%;
  padding-top: 100%;
  background-image: url(${({ img }: IDegustationItemProps) => img});
  background-size: cover;
  background-position-x: center;
`;

export const DegustationItemParamsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
export const ParamWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledWeight = styled(Weight)`
  width: 15px;
  height: 15px;
  fill: ${COLORS.DARK_GREY};
`;

export const StyledLeaf = styled(Leaf)`
  width: 15px;
  height: 15px;
  fill: ${COLORS.DARK_GREY};
`;
