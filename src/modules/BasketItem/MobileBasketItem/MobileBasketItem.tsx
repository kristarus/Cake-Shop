import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { formikConfig } from "../data";
import { COLORS } from "constants/colors";
import { Text, Select } from "components";
import { ItemCounter } from "modules";
import {
  Root,
  MainWrapper,
  StyledPhoto,
  BasketItemParamsWrapper,
  StyledCloseButton,
  StyledChangeButton,
  CountWrapper,
} from "./MobileBasketItemStyles";
import { IMobileBasketItemProps, IItemBasketProps, IItemProps } from "./types";

function MobileBasketItem({ params, event }: IMobileBasketItemProps) {
  const [Count, setCount] = useState(params.count);
  const [Filling, setFilling] = useState(params.filling);
  const [CountEditor, setCountEditor] = useState({
    btnEdit: "block",
    btnAccept: "none",
    text: "block",
    editor: "none",
  });

  const getCount = (data: number) => {
    setCount(data);
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

  const updateBasket = (item: IItemProps) => {
    const basket = getLocalStorageBasket() || [];
    const id = item.id;
    basket.forEach((item: IItemBasketProps) => {
      if (item.id === id) {
        item.count = Count;
        item.filling = Filling;
      }
    });
    setLocalStorageBasket(basket);
  };

  const handleSubmitForm = (data: any, formikHelpers: any) => {
    const copiedData = {
      filling: data.filling,
    };
    console.log(copiedData);
    formikHelpers.resetForm();
  };

  const formik = useFormik({
    ...formikConfig,
    onSubmit: handleSubmitForm,
  });

  const addSelect = () => {
    return params.isPie ? (
      <>
        <Text
          type="description"
          color={COLORS.DARK_GREY}
          fontFamily="OpenSansBold"
        >
          Выберите начинку
        </Text>
        <Select
          params={["Стандартная", "Шоколадная", "Фруктово-ягодная", "Лимонная"]}
          value={Filling}
          onChange={formik.handleChange}
          name="filling"
        />
      </>
    ) : (
      <></>
    );
  };

  const deleteBasketItemFromLS = (item: IItemProps) => {
    const basket = getLocalStorageBasket();
    const id = item.id;
    let deletedIndex: number = 0;
    basket.forEach((item: IItemBasketProps, index: number) => {
      if (item.id === id) {
        deletedIndex = index;
      }
    });
    basket.splice(deletedIndex, 1);
    setLocalStorageBasket(basket);
  };

  const deleteBasketItem = () => {
    deleteBasketItemFromLS(params);
    event();
  };

  const getFillingFromLS = (item: IItemProps) => {
    const basket = getLocalStorageBasket() || [];
    const id = item.id;
    basket.forEach((item: IItemBasketProps) => {
      if (item.id === id) {
        setFilling(item.filling);
      }
    });
  };

  const openCountEditor = () => {
    setCountEditor({
      btnEdit: "none",
      btnAccept: "block",
      text: "none",
      editor: "block",
    });
  };

  const closeCountEditor = () => {
    setCountEditor({
      btnEdit: "block",
      btnAccept: "none",
      text: "block",
      editor: "none",
    });
    event();
  };

  useEffect(() => {
    setFilling(formik.values.filling);
    return () => {};
  }, [formik.values.filling]);

  useEffect(() => {
    updateBasket(params);
    return () => {};
  }, [Filling, Count]);

  useEffect(() => {
    getFillingFromLS(params);
    return () => {};
  }, []);

  return (
    <Root onSubmit={formik.handleSubmit}>
      <StyledCloseButton onClick={deleteBasketItem}>x</StyledCloseButton>
      <MainWrapper>
        <StyledPhoto img={params.img} />
        <Text
          type="p"
          color={COLORS.DARK_GREY}
          fontFamily="OpenSansBold"
          align="center"
        >
          {params.name}
        </Text>
      </MainWrapper>
      <BasketItemParamsWrapper>
        {addSelect()}
        <CountWrapper>
          <div style={{ display: CountEditor.text }}>
            <Text
              type="p"
              color={COLORS.DARK_GREY}
              fontFamily="OpenSansLight"
              align="center"
            >
              {Count}
            </Text>
          </div>
          <div style={{ display: CountEditor.editor }}>
            <ItemCounter initialCount={params.count} onClick={getCount} />
          </div>

          <StyledChangeButton
            onClick={openCountEditor}
            style={{ display: CountEditor.btnEdit }}
          >
            Изменить
          </StyledChangeButton>
          <StyledChangeButton
            onClick={closeCountEditor}
            style={{ display: CountEditor.btnAccept }}
          >
            Применить
          </StyledChangeButton>
        </CountWrapper>
        <Text type="h3" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
          {params.price}
        </Text>
      </BasketItemParamsWrapper>
    </Root>
  );
}

export default MobileBasketItem;
