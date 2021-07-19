import { COLORS } from "constants/colors";
import {
  Root,
  ContentWrapper,
  StyledHeader,
  ItemWrapper,
  DottedLineRight,
  DottedLineReversed,
  HeaderBG,
  StyledText,
} from "./DesktopSectionMakeOrderStyles";
import { Text } from "components";

function DesktopSectionMakeOrder() {
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
                type="h3"
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
        <DottedLineRight />
        <ItemWrapper>
          <StyledHeader>
            <HeaderBG>02</HeaderBG>
            <StyledText>
              <Text
                type="h3"
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
        <DottedLineReversed />
        <ItemWrapper>
          <StyledHeader>
            <HeaderBG>01</HeaderBG>
            <StyledText>
              <Text
                type="h3"
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

export default DesktopSectionMakeOrder;
