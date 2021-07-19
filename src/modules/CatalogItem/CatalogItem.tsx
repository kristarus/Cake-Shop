import { useState } from "react";
import { COLORS } from "constants/colors";
import { Text } from "components";
import { MainWrapper, PriceWrapper, StyledPhoto } from "./CatalogItemStyles";
import { ICatalogItemProps } from "./types";
import { ModalCatalogItem } from "modules";

function CatalogItem({ params }: ICatalogItemProps) {
  const [Modal, setModal] = useState<"block" | "none">("none");

  const changeModal = () => {
    Modal === "block" ? setModal("none") : setModal("block");
  };

  return (
    <>
      <ModalCatalogItem params={params} onClick={changeModal} display={Modal} />
      <MainWrapper onClick={changeModal}>
        <StyledPhoto img={params.img} />
        <Text
          type="p"
          color={COLORS.DARK_GREY}
          fontFamily="OpenSansBold"
          align="center"
        >
          {params.name}
        </Text>
        <PriceWrapper>
          <Text
            type="h4"
            color={COLORS.GREY}
            fontFamily="OpenSansBold"
            align="center"
          >
            {params.price}
          </Text>
        </PriceWrapper>
      </MainWrapper>
    </>
  );
}

export default CatalogItem;
