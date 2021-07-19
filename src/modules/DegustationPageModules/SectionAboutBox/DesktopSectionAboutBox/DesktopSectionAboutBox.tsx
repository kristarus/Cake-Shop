import { COLORS } from "constants/colors";
import {
  Root,
  TextWrapper,
  ContentWrapper,
  StyledImage,
} from "./DesktopSectionAboutBoxStyles";
import { Text } from "components";

function DesktopSectionAboutBox() {
  return (
    <Root>
      <Text
        type="h2"
        color={COLORS.DARK_GREY}
        fontFamily="OpenSansBold"
        align="center"
      >
        Дегустационные боксы
      </Text>
      <ContentWrapper>
        <StyledImage />
        <TextWrapper>
          <Text
            type="p"
            color={COLORS.DARK_GREY}
            fontFamily="OpenSansLight"
            align="center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            reiciendis facere quaerat officia nulla provident distinctio odit
            tempora quasi, itaque quibusdam numquam quisquam non corporis minus
            dolorem eligendi. Sunt, dolorem.
          </Text>
          <Text
            type="p"
            color={COLORS.DARK_GREY}
            fontFamily="OpenSansLight"
            align="center"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
            assumenda, hic neque quidem adipisci voluptates ea repellendus
            tempora praesentium corporis?
          </Text>
          <Text
            type="p"
            color={COLORS.DARK_GREY}
            fontFamily="OpenSansLight"
            align="center"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At laborum
            sunt mollitia, harum distinctio eos?
          </Text>
        </TextWrapper>
      </ContentWrapper>
    </Root>
  );
}

export default DesktopSectionAboutBox;
