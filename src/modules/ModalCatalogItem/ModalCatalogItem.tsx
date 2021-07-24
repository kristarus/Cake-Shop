import { useState } from "react";
import { COLORS } from "constants/colors";
import { Text, Button } from "components";
import { ItemCounter } from "modules";
import {
  StyledPhoto,
  ModalCatalogItemParamsWrapper,
  ParamWrapper,
  StyledLeaf,
  StyledWeight,
  CounterWrapper,
  StyledModal,
  StyledModalWindow,
  StyledCloseButton,
} from "./ModalCatalogItemStyles";
import { IModalCatalogItemProps, IItemBasketProps, IItemProps } from "./types";

function ModalCatalogItem({
  params,
  display,
  onClick,
}: IModalCatalogItemProps) {
  const [Count, setCount] = useState(1);

  const getCount = (data: number) => {
    setCount(data);
  };

  const closeModal = () => {
    onClick();
  };

  const sendToLocalStorage = () => {
    addToBasket(params);
    closeModal();
  };

  const setLocalStorageBasket = (basket: object[]) => {
    localStorage.setItem("basket", JSON.stringify(basket));
  };

  const getLocalStorageBasket = () => {
    let JSONbasket: string | null;
    JSONbasket = localStorage.getItem("basket");
    const basket = JSON.parse(JSONbasket || "[]");
    return basket;
  };

  const addToBasket = (item: IItemProps) => {
    const basket = getLocalStorageBasket() || [];
    const id = item.id;
    let isConsist = false;
    basket.forEach((item: IItemBasketProps) =>
      item.id === id ? (isConsist = true) : null
    );
    if (isConsist) {
      basket.forEach((item: IItemBasketProps) =>
        item.id === id ? (item.count = item.count + Count) : null
      );
    } else {
      const name = item.name;
      const price = item.price;
      const isPie = item.isPie;
      const img = item.img;
      const type = item.type;
      const filling = "Стандартная";
      const count = Count;

      const ItemObject = { name, price, filling, count, id, type, isPie, img };
      basket.push(ItemObject);
    }
    setLocalStorageBasket(basket);
  };

  return (
    <StyledModal style={{ display }}>
      <StyledModalWindow>
        <StyledCloseButton onClick={closeModal}>x</StyledCloseButton>
        <StyledPhoto img={params.img} />
        <Text type="h4" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
          {params.name}
        </Text>
        <ModalCatalogItemParamsWrapper>
          <ParamWrapper>
            <StyledWeight />
            <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansLight">
              {params.weight}
            </Text>
          </ParamWrapper>
          <ParamWrapper>
            <StyledLeaf />
            <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansLight">
              {params.leaf}
            </Text>
          </ParamWrapper>
        </ModalCatalogItemParamsWrapper>
        <Text
          type="p"
          color={COLORS.DARK_GREY}
          fontFamily="OpenSansBold"
          underline
        >
          Cостав
        </Text>
        <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansLight">
          {params.structure}
        </Text>
        <Text
          type="p"
          color={COLORS.DARK_GREY}
          fontFamily="OpenSansBold"
          underline
        >
          Количество
        </Text>
        <CounterWrapper>
          <ItemCounter onClick={getCount} />
        </CounterWrapper>
        <Button
          backgroundcolor={COLORS.DARK_GREY}
          textcolor={COLORS.WHITE}
          bordercolor={COLORS.DARK_GREY}
          text="В корзину"
          onClick={sendToLocalStorage}
        />
      </StyledModalWindow>
    </StyledModal>
  );
}

export default ModalCatalogItem;
