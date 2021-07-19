import {
  StyledRadio,
  RadioWrapper,
  IconSizeWrapper,
  StyledFormControlLabel,
} from "./IconRadioStyles";
import { Text } from "components";
import { IIconRadioProps } from "./types";

function IconRadio({
  children,
  value,
  color,
  withIcon = true,
}: IIconRadioProps) {
  const getSymbolSize = () => {
    switch (value) {
      case "4":
        return "S";
      case "8":
        return "M";
      case "12":
        return "L";
      default:
        break;
    }
  };

  const getRadio = () => {
    if (withIcon)
      return (
        <RadioWrapper>
          <StyledFormControlLabel
            label
            value={value}
            control={<StyledRadio color="default" />}
          />
          <IconSizeWrapper>
            <Text type="h2" color={color} fontFamily="OpenSansBold">
              {getSymbolSize()}
            </Text>
            {children}
          </IconSizeWrapper>
        </RadioWrapper>
      );
    else {
      switch (value) {
        case "4":
          return (
            <StyledFormControlLabel
              label="S"
              value={value}
              control={<StyledRadio color="default" />}
            />
          );
        case "8":
          return (
            <StyledFormControlLabel
              label="M"
              value={value}
              control={<StyledRadio color="default" />}
            />
          );
        case "12":
          return (
            <StyledFormControlLabel
              label="L"
              value={value}
              control={<StyledRadio color="default" />}
            />
          );
        default:
          return <></>;
      }
    }
  };

  return getRadio();
}

export default IconRadio;
