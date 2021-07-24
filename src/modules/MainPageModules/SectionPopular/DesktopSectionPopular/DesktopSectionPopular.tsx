import { COLORS } from "constants/colors";
import { Root, ContentWrapper } from "./DesktopSectionPopularStyles";
import { PopularItem } from "modules";
import { Text, Button, NavigationLink } from "components";
import { popularRight, popularReverse } from "assets";
import { pageRoutes } from "constants/pageRoutes";

function DesktopSectionPopular() {
  return (
    <Root>
      <Text type="h2" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
        Популярные товары
      </Text>
      <ContentWrapper>
        <PopularItem orientation="right" img={popularRight} />
        <PopularItem orientation="reverse" img={popularReverse} />
      </ContentWrapper>
      <NavigationLink href={pageRoutes.POPULAR}>
        <Button
          backgroundcolor={COLORS.DARK_GREY}
          textcolor={COLORS.WHITE}
          bordercolor={COLORS.DARK_GREY}
          text="Узнать больше"
          onClick={() => {}}
        />
      </NavigationLink>
    </Root>
  );
}

export default DesktopSectionPopular;
