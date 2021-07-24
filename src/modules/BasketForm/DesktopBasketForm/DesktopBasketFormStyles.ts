import styled from "styled-components";
import { COLORS } from "constants/colors";

interface IContentWrapperProps {
  align: "flex-end" | "center";
  margin: string;
}

export const BasketFormWrapper = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 40px;
  background-color: ${COLORS.LIGHT_GREY};
`;

export const InputsWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const DeliveryWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContentWrapper = styled.div<IContentWrapperProps>`
  margin: ${({ margin }: IContentWrapperProps) => margin};
  display: flex;
  justify-content: ${({ align }: IContentWrapperProps) => align};
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;
