import { COLORS } from "constants/colors";
import {
  Root,
  ContentWrapper,
  ItemWrapper,
  StyledPhoto,
} from "./DesktopSectionTeamStyles";
import { Text } from "components";
import { Ekaterina, Kristina, Egor, Andrey } from "assets";

function DesktopSectionTeam() {
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
      <ContentWrapper>
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
      </ContentWrapper>
    </Root>
  );
}

export default DesktopSectionTeam;
