import { COLORS } from "constants/colors";
import {
  Root,
  PhotoWrapper,
  StyledPhoto,
  TextWrapper,
  BackgroundPhoto,
  ContentWrapper,
} from "./MobileSectionAboutShopStyles";
import { Text } from "components";
import { AboutUs1, AboutUs2, AboutUs3, AboutUs4, infoImage } from "assets";

function MobileSectionAboutShop() {
  return (
    <Root>
      <Text
        type="h2"
        color={COLORS.DARK_GREY}
        fontFamily="OpenSansBold"
        align="center"
      >
        О кондитерской
      </Text>
      <ContentWrapper>
        <PhotoWrapper>
          <StyledPhoto img={AboutUs1} />
          <StyledPhoto img={AboutUs2} />
          <StyledPhoto img={AboutUs3} />
          <StyledPhoto img={AboutUs4} />
        </PhotoWrapper>
        <TextWrapper>
          <Text
            type="p"
            color={COLORS.DARK_GREY}
            fontFamily="OpenSansLight"
            align="center"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
            dolorem, tenetur quibusdam aut odio voluptatum facilis, aspernatur,
            recusandae molestiae dolore quam amet inventore laborum voluptas
            tempora veniam minus nesciunt eaque.
          </Text>
          <Text
            type="p"
            color={COLORS.DARK_GREY}
            fontFamily="OpenSansLight"
            align="center"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            sint saepe delectus fugiat officia ipsum, animi a maiores veniam
            enim, in optio magni voluptate quibusdam labore deleniti amet
            deserunt dolore.
          </Text>
        </TextWrapper>
        <BackgroundPhoto img={infoImage} />
        <TextWrapper>
          <Text
            type="p"
            color={COLORS.DARK_GREY}
            fontFamily="OpenSansLight"
            align="center"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
            dolorem, tenetur quibusdam aut odio voluptatum facilis, aspernatur,
            recusandae molestiae dolore quam amet inventore laborum voluptas
            tempora veniam minus nesciunt eaque.
          </Text>
          <Text
            type="p"
            color={COLORS.DARK_GREY}
            fontFamily="OpenSansLight"
            align="center"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            sint saepe delectus fugiat officia ipsum, animi a maiores veniam
            enim, in optio magni voluptate quibusdam labore deleniti amet
            deserunt dolore.
          </Text>
          <Text
            type="p"
            color={COLORS.DARK_GREY}
            fontFamily="OpenSansLight"
            align="center"
          >
            Lorem, ipsum dolor
          </Text>
        </TextWrapper>
      </ContentWrapper>
    </Root>
  );
}

export default MobileSectionAboutShop;
