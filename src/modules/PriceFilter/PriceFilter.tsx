import { COLORS } from "constants/colors";
import { Text, Input } from "components";
import { MainWrapper, InputsWrapper } from "./PriceFilterStyles";
import { IPriceFilterProps } from "./types";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { formikConfig } from "./data";
import { FilterLocalStorage } from "constants/data";

function PriceFilter({ min, max, page }: IPriceFilterProps) {
  const handleSubmitForm = (data: any, formikHelpers: any) => {
    const copiedData = {
      name: data.name.trim(),
      phone: data.phone.trim(),
    };
    console.log(copiedData);
    formikHelpers.resetForm();
  };

  const formik = useFormik({
    ...formikConfig,
    onSubmit: handleSubmitForm,
  });

  const checkMinPrice = () => {
    if (
      (+formik.values.min < +min || +formik.values.min > +formik.values.max) &&
      formik.values.min != ""
    ) {
      formik.setFieldValue("min", min);
      updateLocalStorageMinPrice(min);
    } else updateLocalStorageMinPrice();
  };

  const checkMaxPrice = () => {
    if (
      (+formik.values.max > +max || +formik.values.min > +formik.values.max) &&
      formik.values.max != ""
    ) {
      formik.setFieldValue("max", max);
      updateLocalStorageMaxPrice(max);
    } else updateLocalStorageMaxPrice();
  };

  const setLocalStorageFilter = (filter: object) => {
    localStorage.setItem("filter", JSON.stringify(filter));
  };

  const createLocalStorageFilter = () => {
    let JSONfilter: string | null;
    JSONfilter = localStorage.getItem("filter");
    if (JSONfilter === null) {
      const filter: object = FilterLocalStorage;
      setLocalStorageFilter(filter);
    }
  };

  const getLocalStorageFilter = () => {
    let JSONfilter: string | null;
    JSONfilter = localStorage.getItem("filter");
    if (JSONfilter === null) createLocalStorageFilter();
    const filter = JSON.parse(JSONfilter || "{}");
    return filter;
  };

  const updateLocalStorageMinPrice = (min?: string) => {
    const filter = getLocalStorageFilter();
    if (min) filter.price[page].min = min;
    else filter.price[page].min = formik.values.min;
    setLocalStorageFilter(filter);
  };

  const updateLocalStorageMaxPrice = (max?: string) => {
    const filter = getLocalStorageFilter();
    if (max) filter.price[page].max = max;
    else filter.price[page].max = formik.values.max;
    setLocalStorageFilter(filter);
  };

  const filter = getLocalStorageFilter();
  useEffect(() => {
    formik.setFieldValue("min", filter.price[page].min || min);
    formik.setFieldValue("max", filter.price[page].max || max);
    return () => {};
  }, []);

  return (
    <MainWrapper onSubmit={formik.handleSubmit}>
      <Text type="h4" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
        Цена
      </Text>
      <InputsWrapper>
        <Input
          name="min"
          placeholder={min}
          width="80px"
          borderColor={COLORS.DARK_GREY}
          value={formik.values.min}
          onChange={formik.handleChange}
          onBlur={checkMinPrice}
        />
        <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
          —
        </Text>
        <Input
          name="max"
          placeholder={max}
          width="80px"
          borderColor={COLORS.DARK_GREY}
          value={formik.values.max}
          onChange={formik.handleChange}
          onBlur={checkMaxPrice}
        />
      </InputsWrapper>
    </MainWrapper>
  );
}

export default PriceFilter;
