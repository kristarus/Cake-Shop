import { IMobileFilterProps } from "./types";
import {
  StyledModal,
  StyledModalWindow,
  ButtonWrapper,
  Root,
} from "./ModalFilterOptionsStyles";
import {
  FilterCakesData,
  FilterCupcakesData,
  FilterPiesData,
  FilterPopularData,
} from "constants/data";
import { FilterItem } from "modules";
import { Button } from "components";
import { COLORS } from "constants/colors";

function ModalFilterOptions({
  type,
  category,
  display,
  onClick,
}: IMobileFilterProps) {
  const addItems = (data: { name: string; options: string[] }[]) => {
    let params = data.filter((item: { name: string; options: string[] }) =>
      item.name === category ? item : undefined
    );
    if (!params[0]) {
      params = [data[0]];
    }
    return <FilterItem params={params[0]} type={type} />;
  };

  const chooseType = () => {
    switch (type) {
      case "cakes":
        return addItems(FilterCakesData);
      case "cupcakes":
        return addItems(FilterCupcakesData);
      case "pies":
        return addItems(FilterPiesData);
      case "popular":
        return addItems(FilterPopularData);
      default:
        <></>;
    }
  };

  return (
    <>
      <StyledModal style={{ display }}>
        <StyledModalWindow>
          <Root>
            {chooseType()}
            <ButtonWrapper>
              <Button
                backgroundColor={COLORS.DARK_GREY}
                textColor={COLORS.WHITE}
                borderColor={COLORS.DARK_GREY}
                text="Применить"
                onClick={onClick}
              />
            </ButtonWrapper>
          </Root>
        </StyledModalWindow>
      </StyledModal>
    </>
  );
}

export default ModalFilterOptions;
