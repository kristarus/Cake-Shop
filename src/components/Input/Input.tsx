import { StyledInput } from "./InputStyles";
import { IInputProps } from "./types";

function Input({
  error,
  name = "",
  value = "",
  onChange,
  onBlur,
  placeholder = "",
  bordercolor,
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
      bordercolor={bordercolor}
      width={width}
      multiline={multiline}
      rows={rows}
      type={type}
      onBlur={onBlur}
    />
  );
}

export default Input;
