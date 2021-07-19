import React from "react";
import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledP,
  StyledDescription,
} from "./TextStyles";
import { ITextProps } from "./types";

function Text({
  children,
  type = "p",
  color = "black",
  fontFamily = "OpenSansLight",
  underline = false,
  align = "",
}: ITextProps) {
  const setTextType = () => {
    switch (type) {
      case "h1":
        return (
          <StyledH1
            color={color}
            fontFamily={fontFamily}
            underline={underline}
            align={align}
          >
            {children}
          </StyledH1>
        );
      case "h2":
        return (
          <StyledH2
            color={color}
            fontFamily={fontFamily}
            underline={underline}
            align={align}
          >
            {children}
          </StyledH2>
        );
      case "h3":
        return (
          <StyledH3
            color={color}
            fontFamily={fontFamily}
            underline={underline}
            align={align}
          >
            {children}
          </StyledH3>
        );
      case "h4":
        return (
          <StyledH4
            color={color}
            fontFamily={fontFamily}
            underline={underline}
            align={align}
          >
            {children}
          </StyledH4>
        );
      case "p":
        return (
          <StyledP
            color={color}
            fontFamily={fontFamily}
            underline={underline}
            align={align}
          >
            {children}
          </StyledP>
        );
      case "description":
        return (
          <StyledDescription
            color={color}
            fontFamily={fontFamily}
            underline={underline}
            align={align}
          >
            {children}
          </StyledDescription>
        );
      default:
        break;
    }
  };

  return <div>{setTextType()}</div>;
}

export default Text;
