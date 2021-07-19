import { StyledLine } from "./LineStyles";
import { ILineProps } from "./types";

function Line({ color, size, type = "vertical" }: ILineProps) {
  return <StyledLine color={color} size={size} type={type} />;
}

export default Line;
