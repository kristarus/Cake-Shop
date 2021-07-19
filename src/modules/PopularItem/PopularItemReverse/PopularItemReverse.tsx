import {
  PopularItemWrapper,
  PopularItemParamsWrapper,
  ParamWrapper,
  StyledLeaf,
  StyledWeight,
} from "./PopularItemStylesReverse";
import { Text } from "components";
import { COLORS } from "constants/colors";
import { IPopularItemReverseProps } from "./types";
import { StyledPhoto } from "./PopularItemStylesReverse";

function PopularItemReverse({ img }: IPopularItemReverseProps) {
  return (
    <PopularItemWrapper>
      <Text type="h4" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
        Чизкейк "Клубничный"
      </Text>
      <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansLight">
        Нежный чизкейк на основе крем-сыра Филадельфия с добавлением клубничного
        пюре на шоколадно-песочной основе
      </Text>
      <PopularItemParamsWrapper>
        <Text type="h3" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
          50 BYN
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
            378 кКал
          </Text>
        </ParamWrapper>
      </PopularItemParamsWrapper>
      <StyledPhoto img={img} />
    </PopularItemWrapper>
  );
}

export default PopularItemReverse;
