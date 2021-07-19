import { StyledIconButton } from "./IconButtonStyles";
import { IIconButtonProps } from "./types";

function IconButton({
  children,
  bgcolor = "white",
  onClick,
}: IIconButtonProps) {
  return (
    <StyledIconButton onClick={onClick} bgcolor={bgcolor}>
      {children}
    </StyledIconButton>
  );
}

export default IconButton;
