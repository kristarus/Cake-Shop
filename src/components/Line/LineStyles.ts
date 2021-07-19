import styled from "styled-components";

interface ILineProps {
  color: string;
  size: string;
  type: "vertical" | "horizontal";
}

export const StyledLine = styled.div<ILineProps>`
  background-color: ${({ color }) => color};
  border: none;
  width: ${({ type, size }) => (type === "vertical" ? "2px" : size)};
  height: ${({ type, size }) => (type === "vertical" ? size : "2px")};
`;
