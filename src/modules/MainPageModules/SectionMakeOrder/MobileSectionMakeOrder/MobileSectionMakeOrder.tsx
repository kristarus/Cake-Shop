import { COLORS } from "constants/colors";
import {
  Root,
  ContentWrapper,
  StyledHeader,
  ItemWrapper,
  HeaderBG,
  StyledText,
} from "./MobileSectionMakeOrderStyles";
import { Text } from "components";

function MobileSectionMakeOrder() {
  return (
    <Root>
      <Text type="h2" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
        Как сделать заказ?
      </Text>
      <ContentWrapper>
        <ItemWrapper>
          <StyledHeader>
            <HeaderBG>01</HeaderBG>
            <StyledText>
              <Text
                type="h2"
                color={COLORS.DARK_GREY}
                fontFamily="OpenSansBold"
              >
                Заказ
              </Text>
            </StyledText>
          </StyledHeader>
          <Text
            type="p"
            color={COLORS.DARK_GREY}
            fontFamily="OpenSansLight"
            align="center"
          >
            Оформите заказ онлайн или оставьте заявку на нашем сайте
          </Text>
        </ItemWrapper>
        <ItemWrapper>
          <StyledHeader>
            <HeaderBG>02</HeaderBG>
            <StyledText>
              <Text
                type="h2"
                color={COLORS.DARK_GREY}
                fontFamily="OpenSansBold"
              >
                Доставка
              </Text>
            </StyledText>
          </StyledHeader>
          <Text
            type="p"
            color={COLORS.DARK_GREY}
            fontFamily="OpenSansLight"
            align="center"
          >
            Выберите время доставки или заберите свой заказ лично
          </Text>
        </ItemWrapper>
        <ItemWrapper>
          <StyledHeader>
            <HeaderBG>03</HeaderBG>
            <StyledText>
              <Text
                type="h2"
                color={COLORS.DARK_GREY}
                fontFamily="OpenSansBold"
              >
                Получение
              </Text>
            </StyledText>
          </StyledHeader>
          <Text
            type="p"
            color={COLORS.DARK_GREY}
            fontFamily="OpenSansLight"
            align="center"
          >
            Насладись вкусом наших десертов уже через 24 часа
          </Text>
        </ItemWrapper>
      </ContentWrapper>
    </Root>
  );
}

export default MobileSectionMakeOrder;
