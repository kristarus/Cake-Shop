import { useState } from "react";
import { IMobileFilterProps } from "./types";
import {
  StyledModal,
  StyledModalWindow,
  StyledItemBtn,
  ButtonWrapper,
  Root,
} from "./ModalFilterHeadersStyles";
import {
  FilterCakesData,
  FilterCupcakesData,
  FilterPiesData,
  FilterPopularData,
} from "constants/data";
import { PriceFilter } from "modules";
import { Button } from "components";
import { COLORS } from "constants/colors";
import ModalFilterOptions from "../ModalFilterOptions";

function ModalFilterHeaders({
  type,
  min,
  max,
  display,
  onClick,
}: IMobileFilterProps) {
  const [ModalOptions, setModalOptions] = useState<"block" | "none">("none");

  const [Category, setCategory] = useState<string | undefined>(
    FilterCakesData[0].name
  );

  const addItems = (data: { name: string; options: string[] }[]) => {
    return data.map((item: { name: string; options: string[] }) => (
      <StyledItemBtn onClick={changeModalOptions} id={item.name}>
        <div id={item.name}>{item.name}</div>
        <div id={item.name}>{">"}</div>
      </StyledItemBtn>
    ));
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

  const changeModalOptions = (event: any) => {
    ModalOptions === "block"
      ? setModalOptions("none")
      : setModalOptions("block");

    setCategory(event.target.id);
    onClick();
  };

  const changeModals = () => {
    ModalOptions === "block"
      ? setModalOptions("none")
      : setModalOptions("block");
    onClick();
  };

  return (
    <>
      <StyledModal style={{ display }}>
        <StyledModalWindow>
          <Root>
            <PriceFilter min={min} max={max} page={type} />
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

      <ModalFilterOptions
        type={type}
        display={ModalOptions}
        category={Category}
        onClick={changeModals}
      />
    </>
  );
}

export default ModalFilterHeaders;
