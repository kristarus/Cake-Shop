import { useState, useEffect } from "react";
import { IconRadio, Text } from "components";
import {
  SelectedPieceOfCake,
  UnselectedPieceOfCake,
  WrapperIconSelected,
  WrapperIconUnselected,
  StyledRadioGroup,
} from "./DesktopRadioGroupStyles";
import { COLORS } from "constants/colors";
import { IDesktopIconRadioGroup } from "./types";

function DesktopRadioGroup({ onClick }: IDesktopIconRadioGroup) {
  const [radioValue, setRadioValue] = useState<"4" | "8" | "12">("4");

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

  const pasteIcon = (value: string) => {
    return checkValue(value) ? (
      <WrapperIconSelected>
        <SelectedPieceOfCake />
        <Text type="h4" color={COLORS.LIGHT_GREY} fontFamily="OpenSansLight">
          x {value}
        </Text>
      </WrapperIconSelected>
    ) : (
      <WrapperIconUnselected>
        <UnselectedPieceOfCake />
        <Text type="h4" color={COLORS.DARK_GREY} fontFamily="OpenSansLight">
          x {value}
        </Text>
      </WrapperIconUnselected>
    );
  };

  const getColor = (value: string) => {
    return checkValue(value) ? COLORS.DARK_GREY : COLORS.GREY;
  };

  return (
    <StyledRadioGroup
      name="RadioSize"
      value={radioValue}
      onChange={handleChange}
    >
      <IconRadio value="4" color={getColor("4")}>
        {pasteIcon("4")}
      </IconRadio>
      <IconRadio value="8" color={getColor("8")}>
        {pasteIcon("8")}
      </IconRadio>
      <IconRadio value="12" color={getColor("12")}>
        {pasteIcon("12")}
      </IconRadio>
    </StyledRadioGroup>
  );
}

export default DesktopRadioGroup;
