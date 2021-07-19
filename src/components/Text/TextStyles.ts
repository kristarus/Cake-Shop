import styled from "styled-components";
import "assets/fonts/BrittanySignature/index.css";
import "assets/fonts/OpenSans/index.css";

interface IStyledTextProps {
  fontFamily: string;
  color: string;
  underline: boolean;
  align: string;
}

export const StyledH1 = styled.h1<IStyledTextProps>`
  margin: 5px;
  font-family: ${({ fontFamily }: IStyledTextProps) => fontFamily};
  color: ${({ color }: IStyledTextProps) => color};
  text-decoration: ${({ underline }: IStyledTextProps) =>
    underline ? "underline" : "none"};
  text-align: ${({ align }: IStyledTextProps) => align};
`;
export const StyledH2 = styled.h2`
  margin: 3px;
  font-family: ${({ fontFamily }: IStyledTextProps) => fontFamily};
  color: ${({ color }: IStyledTextProps) => color};
  text-decoration: ${({ underline }: IStyledTextProps) =>
    underline ? "underline" : "none"};
  text-align: ${({ align }: IStyledTextProps) => align};
`;
export const StyledH3 = styled.h3`
  margin: 3px;
  font-family: ${({ fontFamily }: IStyledTextProps) => fontFamily};
  color: ${({ color }: IStyledTextProps) => color};
  text-decoration: ${({ underline }: IStyledTextProps) =>
    underline ? "underline" : "none"};
  text-align: ${({ align }: IStyledTextProps) => align};
`;
export const StyledH4 = styled.h4`
  margin: 3px;
  font-family: ${({ fontFamily }: IStyledTextProps) => fontFamily};
  color: ${({ color }: IStyledTextProps) => color};
  text-decoration: ${({ underline }: IStyledTextProps) =>
    underline ? "underline" : "none"};
  text-align: ${({ align }: IStyledTextProps) => align};
`;
export const StyledP = styled.p`
  margin: 3px;
  font-family: ${({ fontFamily }: IStyledTextProps) => fontFamily};
  color: ${({ color }: IStyledTextProps) => color};
  text-decoration: ${({ underline }: IStyledTextProps) =>
    underline ? "underline" : "none"};
  text-align: ${({ align }: IStyledTextProps) => align};
`;
export const StyledDescription = styled.p`
  margin: 3px;
  font-family: ${({ fontFamily }: IStyledTextProps) => fontFamily};
  color: ${({ color }: IStyledTextProps) => color};
  text-decoration: ${({ underline }: IStyledTextProps) =>
    underline ? "underline" : "none"};
  text-align: ${({ align }: IStyledTextProps) => align};
`;
