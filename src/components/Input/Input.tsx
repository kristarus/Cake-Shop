import { StyledInput } from "./InputStyles";
import { IInputProps } from "./types";

function Input({
  error,
  name = "",
  value = "",
  onChange,
  onBlur,
  placeholder = "",
  borderColor,
  width,
  multiline = false,
  rows,
  type,
}: IInputProps) {
  return (
    <StyledInput
      value={value}
      name={name}
      onChange={onChange}
      error={!!error}
      helperText={error}
      variant="outlined"
      placeholder={placeholder}
      borderColor={borderColor}
      width={width}
      multiline={multiline}
      rows={rows}
      type={type}
      onBlur={onBlur}
    />
  );
}

export default Input;
