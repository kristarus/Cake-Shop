import { useState } from "react";
import { COLORS } from "constants/colors";
import {
  Root,
  CatalogItemsWrapper,
  HeaderWrapper,
} from "./MobileSectionCatalogStyles";
import { Text, Button } from "components";
import { CatalogItem, Filter } from "modules";
import { IMobileSectionCatalogProps } from "./types";
import catalogD from "services/api/data.json";
import { FilterLocalStorage } from "constants/data";

function MobileSectionMain({ header, page }: IMobileSectionCatalogProps) {
  const catalogData: any[] = catalogD;
  const [ModalHeaders, setModalHeaders] = useState<"block" | "none">("none");

  const changeModal = () => {
    changeModalHeaders();
  };

  const changeModalHeaders = () => {
    ModalHeaders === "block"
      ? setModalHeaders("none")
      : setModalHeaders("block");
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
    if (JSONfilter === null) return null;
    const filter = JSON.parse(JSONfilter);
    return filter;
  };

  const checkItemsByFilter = (index: number) => {
    let type: string = page;
    if (catalogData[index]["type"] != type) return false;
    let filter = getLocalStorageFilter();
    if (filter === null) createLocalStorageFilter();
    filter = getLocalStorageFilter();
    if (
      parseInt(catalogData[index]["price"]) < filter["price"][page]["min"] &&
      filter["price"][page]["min"] != ""
    ) {
      return false;
    }
    if (
      parseInt(catalogData[index]["price"]) > filter["price"][page]["max"] &&
      filter["price"][page]["max"] != ""
    ) {
      return false;
    }
    let param: string;
    let option: string;
    for (param in filter[page]) {
      let flag: boolean = false;
      let filterFlag: boolean = false;
      for (option in filter[page][param]) {
        if (filter[page][param][option]) {
          filterFlag = true;
          if (catalogData[index]["filter"]?.[type]?.[param]?.[option]) {
            flag = true;
          }
        }
      }
      if (!flag && filterFlag) return false;
    }
    return true;
  };

  const calculateMinMaxPrice = () => {
    let min = -1;
    let max = 0;
    catalogData.forEach((item) => {
      if (min === -1 && item.type === page) {
        min = parseInt(item.price);
      }
      if (min > parseInt(item.price) && item.type === page)
        min = parseInt(item.price);
      if (max < parseInt(item.price) && item.type === page)
        max = parseInt(item.price);
    });
    return { min, max };
  };

  const addCatalogItems = () => {
    return catalogData.map((item, index) =>
      checkItemsByFilter(index) === true ? (
        <CatalogItem params={item} key={index + Math.random()} />
      ) : null
    );
  };

  return (
    <Root>
      <Filter
        type={page}
        min={String(calculateMinMaxPrice().min)}
        max={String(calculateMinMaxPrice().max)}
        device="mobile"
        onClick={changeModal}
        display={ModalHeaders}
      />
      <HeaderWrapper>
        <Button
          backgroundcolor={COLORS.LIGHT_GREY}
          textcolor={COLORS.GREY}
          bordercolor={COLORS.GREY}
          text="Фильтр"
          onClick={changeModal}
        />
        <Text
          type="h2"
          color={COLORS.DARK_GREY}
          fontFamily="OpenSansBold"
          align="center"
        >
          {header}
        </Text>
      </HeaderWrapper>
      <CatalogItemsWrapper>{addCatalogItems()}</CatalogItemsWrapper>
    </Root>
  );
}

export default MobileSectionMain;
