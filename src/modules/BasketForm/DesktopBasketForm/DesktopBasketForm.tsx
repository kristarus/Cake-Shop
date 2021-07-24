import { COLORS } from "constants/colors";
import {
  BasketFormWrapper,
  InputsWrapper,
  DeliveryWrapper,
  PriceWrapper,
  ContentWrapper,
} from "./DesktopBasketFormStyles";
import { Input, Button, Text, Select, Line } from "components";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { formikConfig } from "../data";
import { IItemBasketProps, IBasketFormProps } from "./types";
import { isAuthenticatedSelector } from "modules/Requests/redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { requestsActionTypes } from "modules/Requests/redux/requestsSlice";

function DesktopBasketForm({ eventState, confirmEvent }: IBasketFormProps) {
  const dispatch = useDispatch();
  const { error } = useSelector(isAuthenticatedSelector);
  const [FormState, setFormState] = useState(true);
  const [Price, setPrice] = useState(0);
  const deliveryPrice = 7;
  const [message, setMessage] = useState({
    message: "Ваш заказ отправлен!",
    display: "none",
  });

  const checkValid = (errors: any) => {
    if (errors.name || errors.phone) {
      setFormState(false);
    } else {
      setFormState(true);
    }
  };

  const handleSubmitForm = (data: any, formikHelpers: any) => {
    const items = getOrderItemsFromBasket();
    console.log("Order Items", items);
    if (items.length === 0) {
      setMessage({
        message: "Ваша корзина пуста!",
        display: "flex",
      });
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
    formikHelpers.resetForm();

    if (error)
      setMessage({
        message: "Произошла ошибка, попробуйте снова!",
        display: "flex",
      });
    else {
      setMessage({
        message: "Ваш заказ отправлен!",
        display: "flex",
      });
      confirmEvent();
      setPrice(0);
    }
  };

  const formik = useFormik({
    ...formikConfig,
    onSubmit: handleSubmitForm,
  });

  const isValid = () => {
    checkValid(formik.errors);
  };

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
    getPrice();
    return () => {};
  }, []);

  useEffect(() => {
    let price = Price;
    price = 0;
    getPrice(price);

    return () => {};
  }, [eventState]);

  return (
    <BasketFormWrapper onSubmit={formik.handleSubmit}>
      <Text type="h4" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
        Контактная информация
      </Text>
      <InputsWrapper>
        <Input
          name="name"
          placeholder="Ваше имя"
          width="47%"
          bordercolor={COLORS.DARK_GREY}
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <Input
          name="phone"
          placeholder="Номер телефона"
          width="47%"
          bordercolor={COLORS.DARK_GREY}
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.errors.phone}
        />
      </InputsWrapper>
      <Input
        name="date"
        type="date"
        placeholder="Дата доставки"
        width="100%"
        bordercolor={COLORS.DARK_GREY}
        value={formik.values.date}
        onChange={formik.handleChange}
      />
      <DeliveryWrapper>
        <Text type="h4" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
          Оплата
        </Text>
        <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
          Выберите способ оплаты
        </Text>
        <Select
          params={[
            "Оплата наличными",
            "Банковской картой",
            "Оплата через интернет",
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
        placeholder="Комментарий к заказу"
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
          Стоимость товаров
        </Text>
        <Text
          type="h4"
          color={COLORS.DARK_GREY}
          fontFamily="OpenSansBold"
          align="end"
        >
          {Price + " BYN"}
        </Text>
      </PriceWrapper>
      <PriceWrapper>
        <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansLight">
          Стоимость Доставки
        </Text>
        <Text
          type="h4"
          color={COLORS.DARK_GREY}
          fontFamily="OpenSansBold"
          align="end"
        >
          {deliveryPrice + " BYN"}
        </Text>
      </PriceWrapper>
      <ContentWrapper align="flex-end" margin="20px 0">
        <Line type="horizontal" size="40%" color={COLORS.DARK_GREY} />
      </ContentWrapper>
      <ContentWrapper align="flex-end" margin="0 0 20px ">
        <Text type="h4" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
          {"ИТОГО: "}
          {Price + deliveryPrice}
          {" BYN"}
        </Text>
      </ContentWrapper>
      <ContentWrapper align="center" margin="0">
        <Button
          backgroundcolor={COLORS.DARK_GREY}
          textcolor={COLORS.WHITE}
          bordercolor={COLORS.DARK_GREY}
          text="Подтвердить заказ"
          onClick={() => {}}
          type="submit"
          onSubmit={isValid}
        />
      </ContentWrapper>
      <ContentWrapper
        align="center"
        margin="10px 0 0"
        style={{ display: message.display }}
      >
        <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansLight">
          {message.message}
        </Text>
      </ContentWrapper>
    </BasketFormWrapper>
  );
}

export default DesktopBasketForm;
