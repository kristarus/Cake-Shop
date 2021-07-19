import { IDesktopFilterProps } from "./types";
import { MainWrapper } from "./DesktopFilterStyles";
import { PriceFilter, FilterItem } from "modules";
import {
  FilterCakesData,
  FilterCupcakesData,
  FilterPiesData,
  FilterPopularData,
} from "constants/data";

function DesktopFilter({ type, min, max }: IDesktopFilterProps) {
  const addFilterItems = () => {
    switch (type) {
      case "cakes":
        return FilterCakesData.map((item, index) => (
          <FilterItem key={item.name + index} params={item} type={type} />
        ));
      case "cupcakes":
        return FilterCupcakesData.map((item, index) => (
          <FilterItem key={item.name + index} params={item} type={type} />
        ));
      case "pies":
        return FilterPiesData.map((item, index) => (
          <FilterItem key={item.name + index} params={item} type={type} />
        ));
      case "popular":
        return FilterPopularData.map((item, index) => (
          <FilterItem key={item.name + index} params={item} type={type} />
        ));
      default:
        <></>;
    }
  };

  return (
    <MainWrapper>
      <PriceFilter min={min} max={max} page={type} />
      {addFilterItems()}
    </MainWrapper>
  );
}

export default DesktopFilter;
