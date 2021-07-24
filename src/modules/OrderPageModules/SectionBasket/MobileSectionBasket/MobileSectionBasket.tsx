import { useState } from "react";
import { COLORS } from "constants/colors";
import {
  Root,
  BasketWrapper,
  BasketItemsWrapper,
} from "./MobileSectionBasketStyles";
import { BasketItem, BasketForm } from "modules";
import { Text, Button } from "components";

function MobileSectionBasket() {
  const [Modal, setModal] = useState<"none" | "block">("none");
  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  const deleteItemEvent = () => {
    setIsDeleted(!isDeleted);
  };

  const confirmEvent = () => {
    setIsConfirmed(!isConfirmed);
    clearLocalStorageBasket();
  };

  const changeModal = () => {
    Modal === "none" ? setModal("block") : setModal("none");
  };

  const getLocalStorageBasket = () => {
    let JSONbasket: string | null;
    JSONbasket = localStorage.getItem("basket");
    const basket = JSON.parse(JSONbasket || "[]");
    return basket;
  };

  const setLocalStorageBasket = (basket: object[]) => {
    localStorage.setItem("basket", JSON.stringify(basket));
  };

  const clearLocalStorageBasket = () => {
    setLocalStorageBasket([]);
  };

  const addBasketItems = () => {
    const basket: [] = getLocalStorageBasket();
    if (!basket.length)
      return (
        <Text
          type="h4"
          color={COLORS.GREY}
          fontFamily="OpenSansLight"
          align="center"
        >
          В корзине ничего нет
        </Text>
      );
    return basket.map((item: any, index: any) => (
      <BasketItem
        params={item}
        key={index + Math.random()}
        event={deleteItemEvent}
      />
    ));
  };

  const addButton = () => {
    const basket: [] = getLocalStorageBasket();
    if (!basket.length) return;
    return (
      <Button
        backgroundcolor={COLORS.WHITE}
        textcolor={COLORS.DARK_GREY}
        bordercolor={COLORS.DARK_GREY}
        text="Оформить заказ"
        onClick={changeModal}
      />
    );
  };

  return (
    <Root>
      <BasketWrapper>
        <Text
          type="h3"
          color={COLORS.DARK_GREY}
          fontFamily="OpenSansBold"
          align="center"
        >
          КОРЗИНА
        </Text>
        <BasketItemsWrapper>{addBasketItems()}</BasketItemsWrapper>
      </BasketWrapper>
      {addButton()}
      <BasketForm
        onClick={changeModal}
        display={Modal}
        eventState={isDeleted}
        confirmEvent={confirmEvent}
      />
    </Root>
  );
}

export default MobileSectionBasket;
