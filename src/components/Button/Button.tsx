import { StyledButton } from "./ButtonStyles";
import { IButtonProps } from "./types";

function Button({
  textColor = "white",
  backgroundColor = "black",
  borderColor = "black",
  text,
  onClick,
  onSubmit,
  type = "button",
}: IButtonProps) {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
    >
      {text}
    </StyledButton>
  );
}

export default Button;
