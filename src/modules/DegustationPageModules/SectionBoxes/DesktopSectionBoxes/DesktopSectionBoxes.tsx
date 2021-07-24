import { useState, useEffect } from "react";
import { COLORS } from "constants/colors";
import { degustation } from "assets";
import {
  Root,
  TextWrapper,
  ContentWrapper,
  ItemsWrapper,
  ButtonWrapper,
} from "./DesktopSectionBoxesStyles";
import { Text, Button } from "components";
import { IconRadioGroup, DegustationItem } from "modules";
import {
  DegustationItemsSizeS,
  DegustationItemsSizeM,
  DegustationItemsSizeL,
} from "..//data";
import { IItemBasketProps, IItemProps } from "./types";

function DesktopSectionBoxes() {
  const [BoxSize, setBoxSize] = useState<"S" | "M" | "L">("S");
  const [Price, setPrice] = useState<"20 BYN" | "35 BYN" | "50 BYN">("20 BYN");
  const [message, setMessage] = useState({
    message: "Ваш заказ отправлен!",
    display: "none",
  });
  let basketObject: IItemProps = {
    id: "d" + BoxSize,
    img: degustation,
    isDegustationBox: true,
    name: "Дегустационный бокс " + BoxSize,
    price: Price,
  };

  const changeBoxSize = (boxSize: "S" | "M" | "L") => {
    setBoxSize(boxSize);
  };

  const addDegustationItems = () => {
    switch (BoxSize) {
      case "S":
        return DegustationItemsSizeS.map((item, index) => (
          <DegustationItem params={item} key={item.id + index} />
        ));
      case "M":
        return DegustationItemsSizeM.map((item, index) => (
          <DegustationItem params={item} key={item.id + index} />
        ));
      case "L":
        return DegustationItemsSizeL.map((item, index) => (
          <DegustationItem params={item} key={item.id + index} />
        ));
      default:
        break;
    }
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
    try {
      const basket = getLocalStorageBasket() || [];
      const id = item.id;
      let isConsist = false;
      basket.forEach((item: IItemBasketProps) =>
        item.id === id ? (isConsist = true) : null
      );
      if (isConsist) {
        basket.forEach((item: IItemBasketProps) =>
          item.id === id ? (item.count = item.count + 1) : null
        );
      } else {
        const name = item.name;
        const price = item.price;
        const isDegustationBox = item.isDegustationBox;
        const img = item.img;
        const count = 1;

        const ItemObject = { name, price, count, id, isDegustationBox, img };
        basket.push(ItemObject);
      }
      setLocalStorageBasket(basket);
      setMessage({
        message: "Ваш заказ добавлен в корзину!",
        display: "grid",
      });
    } catch (e) {
      setMessage({
        message: "Произошла ошибка, попробуйте снова!",
        display: "grid",
      });
    }
  };

  const addPrice = () => {
    if (BoxSize === "S") {
      setPrice("20 BYN");
    } else if (BoxSize === "M") {
      setPrice("35 BYN");
    } else {
      setPrice("50 BYN");
    }
  };

  useEffect(() => {
    addPrice();
    basketObject = {
      id: "d" + BoxSize,
      img: degustation,
      isDegustationBox: true,
      name: "Дегустационный бокс" + BoxSize,
      price: Price,
    };
    setMessage({
      message: "Ваш заказ добавлен в корзину!",
      display: "none",
    });
    return () => {};
  }, [BoxSize]);

  return (
    <Root>
      <ContentWrapper>
        <TextWrapper>
          <Text
            type="h3"
            color={COLORS.DARK_GREY}
            fontFamily="OpenSansBold"
            align="center"
          >
            Соберите свою дегустационную коробку
          </Text>
          <Text
            type="p"
            color={COLORS.DARK_GREY}
            fontFamily="OpenSansLight"
            align="center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            quisquam mollitia recusandae reiciendis praesentium rem.
          </Text>
        </TextWrapper>
        <IconRadioGroup onClick={changeBoxSize} />
        <ItemsWrapper>{addDegustationItems()}</ItemsWrapper>
        <TextWrapper>
          <Text
            type="h2"
            color={COLORS.DARK_GREY}
            fontFamily="OpenSansBold"
            align="center"
          >
            {Price}
          </Text>
          <ButtonWrapper>
            <Button
              backgroundcolor={COLORS.DARK_GREY}
              textcolor={COLORS.WHITE}
              bordercolor={COLORS.DARK_GREY}
              text="В корзину"
              onClick={() => {
                addToBasket(basketObject);
              }}
            />
          </ButtonWrapper>
          <TextWrapper style={{ display: message.display }}>
            <Text
              type="p"
              color={COLORS.DARK_GREY}
              fontFamily="OpenSansLight"
              align="center"
            >
              {message.message}
            </Text>
          </TextWrapper>
        </TextWrapper>
      </ContentWrapper>
    </Root>
  );
}

export default DesktopSectionBoxes;
