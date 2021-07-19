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
  margin: 150px 0;
`;

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8%;
  width: 80%;
  margin: 50px auto;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledPieceOfCake = styled(PieceOfCake)`
  fill: ${COLORS.DARK_GREY};
  margin-right: 7px;
  width: 60px;
  height: 60px;
`;

export const StyledLeaves = styled(Leaves)`
  fill: ${COLORS.DARK_GREY};
  margin-right: 7px;
  width: 60px;
  height: 60px;
`;

export const StyledHandshake = styled(Handshake)`
  fill: ${COLORS.DARK_GREY};
  margin-right: 7px;
  width: 70px;
  height: 70px;
`;

export const StyledDeliveryTruck = styled(DeliveryTruck)`
  fill: ${COLORS.DARK_GREY};
  margin-right: 7px;
  width: 60px;
  height: 60px;
`;

export const StyledClock = styled(Clock)`
  fill: ${COLORS.DARK_GREY};
  margin-right: 7px;
  width: 70px;
  height: 70px;
`;

export const StyledBox = styled(Box)`
  fill: ${COLORS.DARK_GREY};
  margin-right: 7px;
  width: 70px;
  height: 70px;
`;

export const WrapperIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  background-color: ${COLORS.LIGHT_GREY};
`;
