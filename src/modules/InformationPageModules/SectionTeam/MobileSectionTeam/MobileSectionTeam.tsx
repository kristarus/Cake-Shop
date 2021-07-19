import { COLORS } from "constants/colors";
import {
  Root,
  ContentWrapper,
  StyledPhoto,
  ItemWrapper,
  SliderWrapper,
} from "./MobileSectionTeamStyles";
import { Text } from "components";
import { Ekaterina, Kristina, Egor, Andrey } from "assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MobileSectionTeam() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Root>
      <Text
        type="h2"
        color={COLORS.DARK_GREY}
        fontFamily="OpenSansBold"
        align="center"
      >
        Наша команда
      </Text>
      <SliderWrapper>
        <Slider {...settings}>
          <ItemWrapper>
            <StyledPhoto img={Ekaterina} />
            <Text
              type="h4"
              color={COLORS.DARK_GREY}
              fontFamily="OpenSansBold"
              align="center"
            >
              Екатерина
            </Text>
            <Text
              type="p"
              color={COLORS.DARK_GREY}
              fontFamily="OpenSansLight"
              align="center"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              odit.
            </Text>
          </ItemWrapper>
          <ItemWrapper>
            <StyledPhoto img={Egor} />
            <Text
              type="h4"
              color={COLORS.DARK_GREY}
              fontFamily="OpenSansBold"
              align="center"
            >
              Егор
            </Text>
            <Text
              type="p"
              color={COLORS.DARK_GREY}
              fontFamily="OpenSansLight"
              align="center"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              odit.
            </Text>
          </ItemWrapper>
          <ItemWrapper>
            <StyledPhoto img={Kristina} />
            <Text
              type="h4"
              color={COLORS.DARK_GREY}
              fontFamily="OpenSansBold"
              align="center"
            >
              Кристина
            </Text>
            <Text
              type="p"
              color={COLORS.DARK_GREY}
              fontFamily="OpenSansLight"
              align="center"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              odit.
            </Text>
          </ItemWrapper>
          <ItemWrapper>
            <StyledPhoto img={Andrey} />
            <Text
              type="h4"
              color={COLORS.DARK_GREY}
              fontFamily="OpenSansBold"
              align="center"
            >
              Андрей
            </Text>
            <Text
              type="p"
              color={COLORS.DARK_GREY}
              fontFamily="OpenSansLight"
              align="center"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              odit.
            </Text>
          </ItemWrapper>
        </Slider>
      </SliderWrapper>
    </Root>
  );
}

export default MobileSectionTeam;
