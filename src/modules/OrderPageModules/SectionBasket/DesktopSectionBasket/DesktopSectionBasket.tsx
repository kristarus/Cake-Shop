import { useState, useCallback, useRef, useEffect } from "react";
import { COLORS } from "constants/colors";
import {
  Root,
  BasketWrapper,
  FormWrapper,
  BasketFormWrapper,
  BasketItemsWrapper,
} from "./DesktopSectionBasketStyles";
import { BasketItem, BasketForm } from "modules";
import { Text } from "components";
import ResizeDetector from "react-resize-detector";

function DesktopSectionBasket() {
  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  const rootNode = useRef(null);
  const [size, setSize] = useState<number>(0);
  const onResize = useCallback((width?: number, height?: number) => {
    setSize(height || 0);
  }, []);

  const basketNode = useRef(null);
  const [basketSize, setBasketSize] = useState<number>(0);
  const onBasketResize = useCallback((width?: number, height?: number) => {
    setBasketSize(height || 0);
  }, []);

  const [scroll, setScroll] = useState<boolean>(false);

  const checkScroll = () => {
    return basketSize <= size ? setScroll(false) : setScroll(true);
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

  const deleteItemEvent = () => {
    setIsDeleted(!isDeleted);
  };

  const confirmEvent = () => {
    setIsConfirmed(!isConfirmed);
    clearLocalStorageBasket();
    console.log("isConfirmed", isConfirmed);
  };

  useEffect(() => {
    checkScroll();
    return () => {};
  }, [basketSize]);

  // useEffect(() => {
  //   clearLocalStorageBasket();
  //   return () => {};
  // }, [isConfirmed]);

  return (
    <Root>
      <BasketWrapper>
        <Text type="h3" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
          КОРЗИНА
        </Text>
        <ResizeDetector
          handleHeight
          handleWidth
          targetRef={basketNode}
          onResize={onBasketResize}
        >
          <div ref={basketNode}>
            <BasketItemsWrapper size={size} scroll={scroll}>
              {addBasketItems()}
            </BasketItemsWrapper>
          </div>
        </ResizeDetector>
      </BasketWrapper>
      <BasketFormWrapper>
        <Text type="h3" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
          ОФОРМЛЕНИЕ
        </Text>
        <ResizeDetector
          handleHeight
          handleWidth
          targetRef={rootNode}
          onResize={onResize}
        >
          <FormWrapper ref={rootNode}>
            <BasketForm eventState={isDeleted} confirmEvent={confirmEvent} />
          </FormWrapper>
        </ResizeDetector>
      </BasketFormWrapper>
    </Root>
  );
}

export default DesktopSectionBasket;
