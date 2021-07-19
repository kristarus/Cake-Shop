import { COLORS } from "constants/colors";
import {
  Root,
  ContentWrapper,
  StyledPieceOfCake,
  StyledLeaves,
  StyledHandshake,
  StyledDeliveryTruck,
  StyledClock,
  StyledBox,
  WrapperIcon,
  SliderWrapper,
} from "./MobileSectionWhyUsStyles";
import { Text } from "components";
import Slider from "react-slick";
import { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class MobileSectionMain extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Root>
        <Text type="h2" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
          Почему мы?
        </Text>
        <SliderWrapper>
          <Slider {...settings}>
            <ContentWrapper>
              <WrapperIcon>
                <StyledLeaves />
              </WrapperIcon>
              <Text
                type="h4"
                color={COLORS.DARK_GREY}
                fontFamily="OpenSansBold"
                align="center"
              >
                Натуральные продукты
              </Text>
              <Text
                type="p"
                color={COLORS.DARK_GREY}
                fontFamily="OpenSansLight"
                align="center"
              >
                Мы не используем растительных сливок, вредных порошков,
                подсластителей и консервантов
              </Text>
            </ContentWrapper>
            <ContentWrapper>
              <WrapperIcon>
                <StyledPieceOfCake />
              </WrapperIcon>
              <Text
                type="h4"
                color={COLORS.DARK_GREY}
                fontFamily="OpenSansBold"
                align="center"
              >
                Дегустация продукции
              </Text>
              <Text
                type="p"
                color={COLORS.DARK_GREY}
                fontFamily="OpenSansLight"
                align="center"
              >
                У вас есть возможность попробовать наши десерты перед заказом
              </Text>
            </ContentWrapper>
            <ContentWrapper>
              <WrapperIcon>
                <StyledHandshake />
              </WrapperIcon>
              <Text
                type="h4"
                color={COLORS.DARK_GREY}
                fontFamily="OpenSansBold"
                align="center"
              >
                Индивидуальный подход
              </Text>
              <Text
                type="p"
                color={COLORS.DARK_GREY}
                fontFamily="OpenSansLight"
                align="center"
              >
                Мы предлагаем десерты в зависимости от ваших предпочтений на
                любой праздник
              </Text>
            </ContentWrapper>
            <ContentWrapper>
              <WrapperIcon>
                <StyledDeliveryTruck />
              </WrapperIcon>
              <Text
                type="h4"
                color={COLORS.DARK_GREY}
                fontFamily="OpenSansBold"
                align="center"
              >
                Доставка на спецавто
              </Text>
              <Text
                type="p"
                color={COLORS.DARK_GREY}
                fontFamily="OpenSansLight"
                align="center"
              >
                Мы безопасно доставим ваш торт на специальном транспорте
              </Text>
            </ContentWrapper>
            <ContentWrapper>
              <WrapperIcon>
                <StyledClock />
              </WrapperIcon>
              <Text
                type="h4"
                color={COLORS.DARK_GREY}
                fontFamily="OpenSansBold"
                align="center"
              >
                Скорость доставки
              </Text>
              <Text
                type="p"
                color={COLORS.DARK_GREY}
                fontFamily="OpenSansLight"
                align="center"
              >
                Даже если вы решили заказать торт в самый последний момент, вам
                его доставят в срок
              </Text>
            </ContentWrapper>
            <ContentWrapper>
              <WrapperIcon>
                <StyledBox />
              </WrapperIcon>
              <Text
                type="h4"
                color={COLORS.DARK_GREY}
                fontFamily="OpenSansBold"
                align="center"
              >
                Эко упаковка
              </Text>
              <Text
                type="p"
                color={COLORS.DARK_GREY}
                fontFamily="OpenSansLight"
                align="center"
              >
                Мы заботимся о природе, поэтому используем коробки из
                переработанного картона
              </Text>
            </ContentWrapper>
          </Slider>
        </SliderWrapper>
      </Root>
    );
  }
}
