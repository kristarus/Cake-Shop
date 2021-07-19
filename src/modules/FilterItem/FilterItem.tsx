import { COLORS } from "constants/colors";
import { Text, FilterRadio } from "components";
import { MainWrapper } from "./FilterItemStyles";
import { IFilterItemProps } from "./types";

function FilterItem({ params, type }: IFilterItemProps) {
  const addOptions = () => {
    return params.options.map((item, index) => (
      <FilterRadio
        label={item}
        onClick={() => {}}
        key={item + index + Math.random}
        params={params}
        type={type}
      />
    ));
  };

  return (
    <MainWrapper>
      <Text type="h4" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
        {params.name}
      </Text>
      {addOptions()}
    </MainWrapper>
  );
}

export default FilterItem;
