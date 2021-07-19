import {
  PopularItemWrapper,
  PopularItemParamsWrapper,
  ParamWrapper,
  StyledLeaf,
  StyledWeight,
} from "./PopularItemStylesRight";
import { Text } from "components";
import { COLORS } from "constants/colors";
import { IPopularItemRightProps } from "./types";
import { StyledPhoto } from "./PopularItemStylesRight";

function PopularItemRight({ img }: IPopularItemRightProps) {
  return (
    <PopularItemWrapper>
      <StyledPhoto img={img} />
      <Text type="h4" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
        Шоколадный чизкейк
      </Text>
      <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansLight">
        Ароматный чизкейк из отборного крем-сыра Филадельфия с шоколадным
        ганашем в сладком сырном слое и орехово-шоколадной основе.
      </Text>
      <PopularItemParamsWrapper>
        <Text type="h3" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
          60 BYN
        </Text>
        <ParamWrapper>
          <StyledWeight />
          <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansLight">
            1000 гр
          </Text>
        </ParamWrapper>
        <ParamWrapper>
          <StyledLeaf />
          <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansLight">
            319 кКал
          </Text>
        </ParamWrapper>
      </PopularItemParamsWrapper>
    </PopularItemWrapper>
  );
}

export default PopularItemRight;
