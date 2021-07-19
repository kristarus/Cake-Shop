import { COLORS } from "constants/colors";
import { Root, SliderWrapper } from "./MobileSectionPopularStyles";
import { PopularItem } from "modules";
import { Text, Button, NavigationLink } from "components";
import { popularRight, popularReverse } from "assets";
import { pageRoutes } from "constants/pageRoutes";
import Slider from "react-slick";
// import { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MobileSectionPopular() {
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
        Популярные товары
      </Text>
      <SliderWrapper>
        <Slider {...settings}>
          <PopularItem orientation="right" img={popularRight} />
          <PopularItem orientation="right" img={popularReverse} />
        </Slider>
      </SliderWrapper>
      <NavigationLink href={pageRoutes.POPULAR}>
        <Button
          backgroundColor={COLORS.DARK_GREY}
          textColor={COLORS.WHITE}
          borderColor={COLORS.DARK_GREY}
          text="Узнать больше"
          onClick={() => {}}
        />
      </NavigationLink>
    </Root>
  );
}

export default MobileSectionPopular;
