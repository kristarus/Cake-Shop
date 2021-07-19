import { useState, useEffect } from "react";
import { IconRadio, Text } from "components";
import {
  SelectedPieceOfCake,
  UnselectedPieceOfCake,
  WrapperIconSelected,
  WrapperIconUnselected,
  StyledRadioGroup,
} from "./MobileIconRadioGroupStyles";
import { COLORS } from "constants/colors";
import { IMobileIconRadioGroup } from "./types";

function MobileIconRadioGroup({ onClick }: IMobileIconRadioGroup) {
  const [radioValue, setRadioValue] = useState("4");

  const handleChange = (event: any) => {
    setRadioValue(event.target.value);
  };

  const checkValue = (value: string) => {
    return radioValue === value ? true : false;
  };

  useEffect(() => {
    switch (radioValue) {
      case "4":
        onClick("S");
        break;
      case "8":
        onClick("M");
        break;
      case "12":
        onClick("L");
        break;
      default:
        break;
    }
    return () => {};
  }, [radioValue]);

  const getColor = (value: string) => {
    return checkValue(value) ? COLORS.DARK_GREY : COLORS.GREY;
  };

  return (
    <StyledRadioGroup
      name="RadioSize"
      value={radioValue}
      onChange={handleChange}
    >
      <IconRadio value="4" color={getColor("4")} withIcon={false} />
      <IconRadio value="8" color={getColor("8")} withIcon={false} />
      <IconRadio value="12" color={getColor("12")} withIcon={false} />
    </StyledRadioGroup>
  );
}

export default MobileIconRadioGroup;
