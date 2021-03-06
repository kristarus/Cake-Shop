import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { requestsActionTypes } from "modules/Requests/redux/requestsSlice";
import { COLORS } from "constants/colors";
import {
  BasketFormWrapper,
  InputsWrapper,
  DeliveryWrapper,
  PriceWrapper,
  ContentWrapper,
  StyledModal,
  StyledModalWindow,
  StyledCloseButton,
} from "./MobileBasketFormStyles";
import { Input, Button, Text, Select, Line } from "components";
import { IMobileBasketFormProps, IItemBasketProps } from "./types";
import { useFormik } from "formik";
import { formikConfig } from "../data";

function MobileBasketForm({
  onClick,
  display,
  eventState,
  confirmEvent,
}: IMobileBasketFormProps) {
  const dispatch = useDispatch();
  const [FormState, setFormState] = useState(false);
  const [Price, setPrice] = useState(0);
  const deliveryPrice = 7;

  const checkValid = (errors: any) => {
    if (errors.name || errors.phone) {
      setFormState(false);
    } else {
      setFormState(true);
    }
  };

  const handleSubmitForm = (data: any, formikHelpers: any) => {
    const items = getOrderItemsFromBasket();
    if (items.length === 0) {
      return;
    }
    const copiedData = {
      name: data.name.trim(),
      phone: data.phone.trim(),
      date: data.date,
      payment: data.payment,
      comment: data.comment.trim(),
      price: Price + deliveryPrice + " BYN",
      orderItems: items,
    };
    console.log(copiedData);

    if (FormState) {
      dispatch(requestsActionTypes.sendOrderThunk(data));
    }
    confirmEvent();
    setPrice(0);
    onClick();
    formikHelpers.resetForm();
  };

  const formik = useFormik({
    ...formikConfig,
    onSubmit: handleSubmitForm,
  });

  const isValid = () => checkValid(formik.errors);

  const getLocalStorageBasket = () => {
    let JSONbasket: string | null;
    JSONbasket = localStorage.getItem("basket");
    const basket = JSON.parse(JSONbasket || "[]");
    return basket;
  };

  const getOrderItemsFromBasket = () => {
    const basket = getLocalStorageBasket();
    if (basket.lenght === 0) {
      return [];
    } else {
      return basket.map((item: IItemBasketProps) => {
        return {
          id: item.id,
          name: item.name,
          count: item.count,
          filling: item.filling,
          price: item.price,
        };
      });
    }
  };

  const getPrice = (price: number = 0) => {
    const basket = getLocalStorageBasket();
    if (basket.lenght === 0) {
      setPrice(0);
      return Price;
    } else {
      basket.forEach((item: IItemBasketProps) => {
        price += parseInt(item.price) * item.count;
      });
      setPrice(price);
    }
  };

  useEffect(() => {
    let price = Price;
    price = 0;
    getPrice(price);

    return () => {};
  }, [eventState]);

  useEffect(() => {
    getPrice();
    return () => {};
  }, []);

  return (
    <StyledModal style={{ display }}>
      <StyledModalWindow>
        <StyledCloseButton onClick={onClick}>x</StyledCloseButton>
        <BasketFormWrapper onSubmit={formik.handleSubmit}>
          <Text type="h4" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
            ???????????????????? ????????????????????
          </Text>
          <InputsWrapper>
            <Input
              name="name"
              placeholder="???????? ??????"
              width="100%"
              bordercolor={COLORS.DARK_GREY}
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.errors.name}
            />
            <Input
              name="phone"
              placeholder="?????????? ????????????????"
              width="100%"
              bordercolor={COLORS.DARK_GREY}
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.errors.phone}
            />
            <Input
              name="date"
              type="date"
              placeholder="???????? ????????????????"
              width="100%"
              bordercolor={COLORS.DARK_GREY}
              value={formik.values.date}
              onChange={formik.handleChange}
            />
          </InputsWrapper>
          <DeliveryWrapper>
            <Text type="h4" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
              ????????????
            </Text>
            <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
              ???????????????? ???????????? ????????????
            </Text>
            <Select
              params={[
                "???????????? ??????????????????",
                "???????????????????? ????????????",
                "???????????? ?????????? ????????????????",
              ]}
              value={formik.values.payment}
              onChange={formik.handleChange}
              error={formik.errors.payment}
              name="payment"
            />
          </DeliveryWrapper>
          <Input
            multiline
            rows={6}
            name="comment"
            placeholder="?????????????????????? ?? ????????????"
            width="100%"
            bordercolor={COLORS.DARK_GREY}
            value={formik.values.comment}
            onChange={formik.handleChange}
          />
          <ContentWrapper align="center" margin="20px 0">
            <Line type="horizontal" size="90%" color={COLORS.DARK_GREY} />
          </ContentWrapper>
          <PriceWrapper>
            <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansLight">
              ?????????????????? ??????????????
            </Text>
            <Text type="h4" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
              {Price + " BYN"}
            </Text>
          </PriceWrapper>
          <PriceWrapper>
            <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansLight">
              ?????????????????? ????????????????
            </Text>
            <Text type="h4" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
              {deliveryPrice + " BYN"}
            </Text>
          </PriceWrapper>
          <ContentWrapper align="flex-end" margin="20px 0">
            <Line type="horizontal" size="40%" color={COLORS.DARK_GREY} />
          </ContentWrapper>
          <ContentWrapper align="flex-end" margin="0 0 20px ">
            <Text type="h4" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
              {"??????????: "}
              {Price + deliveryPrice}
              {" BYN"}
            </Text>
          </ContentWrapper>
          <ContentWrapper align="center" margin="0">
            <Button
              backgroundcolor={COLORS.DARK_GREY}
              textcolor={COLORS.WHITE}
              bordercolor={COLORS.DARK_GREY}
              text="?????????????????????? ??????????"
              onClick={() => {}}
              type="submit"
              onSubmit={isValid}
            />
          </ContentWrapper>
        </BasketFormWrapper>
      </StyledModalWindow>
    </StyledModal>
  );
}

export default MobileBasketForm;
