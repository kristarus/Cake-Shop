import { Text, Button, NavigationLink } from "components";
import { COLORS } from "constants/colors";
import { pageRoutes } from "constants/pageRoutes";
import { Root, TextWrapper } from "./SectionAboutUsStyles";

function SectionAboutUs() {
  return (
    <Root>
      <Text type="h2" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
        О нас
      </Text>
      <TextWrapper>
        <Text
          type="p"
          color={COLORS.DARK_GREY}
          fontFamily="OpenSansLight"
          align="center"
        >
          Онлайн кондитерская <b>Bake a Cake</b> предлагает натуральные и свежие
          десерты и гарантирует надёжную и оперативную доставку.
        </Text>
        <Text
          type="p"
          color={COLORS.DARK_GREY}
          fontFamily="OpenSansLight"
          align="center"
        >
          Вам больше не нужно тратить много времени, достаточно выбрать на сайте
          любимую начинку и дизайн - об остальном позаботимся мы.
        </Text>
      </TextWrapper>
      <NavigationLink href={pageRoutes.INFORMATION}>
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

export default SectionAboutUs;
