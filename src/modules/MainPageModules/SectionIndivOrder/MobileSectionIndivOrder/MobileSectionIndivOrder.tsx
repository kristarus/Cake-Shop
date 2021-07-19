import { COLORS } from "constants/colors";
import { Root, ContentWrapper } from "./MobileSectionIndivOrderStyles";
import { Text } from "components";
import { IndividualOrderForm } from "modules";

function MobileSectionIndivOrder() {
  return (
    <Root>
      <ContentWrapper>
        <Text
          type="h2"
          color={COLORS.GREY}
          fontFamily="OpenSansBold"
          align="center"
        >
          Индивидуальный заказ
        </Text>
        <Text
          type="h3"
          color={COLORS.DARK_GREY}
          fontFamily="OpenSansBold"
          align="center"
        >
          Создайте свой праздничный торт
        </Text>
        <Text
          type="p"
          color={COLORS.DARK_GREY}
          fontFamily="OpenSansLight"
          align="center"
        >
          Позвоните или напишите нам, и мы приготовим десерты любого формата,
          размера и содержания с учётом ваших пожеланий.
        </Text>
      </ContentWrapper>
      <IndividualOrderForm />
    </Root>
  );
}

export default MobileSectionIndivOrder;
