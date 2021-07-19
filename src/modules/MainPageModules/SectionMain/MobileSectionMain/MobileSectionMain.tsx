import { COLORS } from "constants/colors";
import {
  Root,
  TextWrapper,
  ContentWrapper,
  MainImage,
} from "./MobileSectionMainStyles";
import { NavigationMenu } from "modules";
import { Text } from "components";

function MobileSectionMain() {
  return (
    <Root>
      <NavigationMenu />
      <ContentWrapper>
        <MainImage />
        <TextWrapper>
          <Text
            type="h1"
            color={COLORS.DARK_GREY}
            fontFamily="BrittanySignature"
            align="center"
          >
            Bake a Cake
          </Text>
          <Text
            type="h4"
            color={COLORS.DARK_GREY}
            fontFamily="OpenSansBold"
            align="center"
          >
            Больше, чем просто кондитерская
          </Text>
        </TextWrapper>
      </ContentWrapper>
    </Root>
  );
}

export default MobileSectionMain;
