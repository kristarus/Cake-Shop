import styled from "styled-components";
import {
  PieceOfCake,
  Leaves,
  Handshake,
  DeliveryTruck,
  Clock,
  Box,
} from "assets";
import { COLORS } from "constants/colors";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
`;

export const SliderWrapper = styled.div`
  width: 70%;
  margin: 20px auto;
`;

export const ContentWrapper = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;

export const StyledPieceOfCake = styled(PieceOfCake)`
  fill: ${COLORS.DARK_GREY};
  margin-right: 7px;
  width: 50px;
  height: 50px;
`;

export const StyledLeaves = styled(Leaves)`
  fill: ${COLORS.DARK_GREY};
  margin-right: 7px;
  width: 50px;
  height: 50px;
`;

export const StyledHandshake = styled(Handshake)`
  fill: ${COLORS.DARK_GREY};
  margin-right: 7px;
  width: 60px;
  height: 60px;
`;

export const StyledDeliveryTruck = styled(DeliveryTruck)`
  fill: ${COLORS.DARK_GREY};
  margin-right: 7px;
  width: 50px;
  height: 50px;
`;

export const StyledClock = styled(Clock)`
  fill: ${COLORS.DARK_GREY};
  margin-right: 7px;
  width: 60px;
  height: 60px;
`;

export const StyledBox = styled(Box)`
  fill: ${COLORS.DARK_GREY};
  margin-right: 7px;
  width: 60px;
  height: 60px;
`;

export const WrapperIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background-color: ${COLORS.LIGHT_GREY};
`;
