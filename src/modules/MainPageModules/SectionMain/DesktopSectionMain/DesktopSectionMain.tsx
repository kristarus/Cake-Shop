import { COLORS } from "constants/colors";
import {
  Root,
  TextWrapper,
  ContentWrapper,
  MainImage,
} from "./DesktopSectionMainStyles";
import { NavigationMenu } from "modules";
import { Text } from "components";

function DesktopSectionMain() {
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
          >
            Bake a Cake
          </Text>
          <Text type="h4" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
            Больше, чем просто кондитерская
          </Text>
        </TextWrapper>
      </ContentWrapper>
    </Root>
  );
}

export default DesktopSectionMain;
