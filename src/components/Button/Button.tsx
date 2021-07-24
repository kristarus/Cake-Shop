import { StyledButton } from "./ButtonStyles";
import { IButtonProps } from "./types";

function Button({
  textcolor = "white",
  backgroundcolor = "black",
  bordercolor = "black",
  text,
  onClick,
  onSubmit,
  type = "button",
}: IButtonProps) {
  return (
    <StyledButton
      backgroundcolor={backgroundcolor}
      textcolor={textcolor}
      bordercolor={bordercolor}
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
    >
      {text}
    </StyledButton>
  );
}

export default Button;
