import { StyledUploadButton } from "./FileInputStyles";
import { COLORS } from "constants/colors";
import { Text } from "components";
import { IFileInputProps } from "./types";

function FileInput({ onChange, name = "" }: IFileInputProps) {
  return (
    <StyledUploadButton component="label">
      <Text
        type="p"
        color={COLORS.DARK_GREY}
        fontFamily="OpenSansBold"
        underline
      >
        Загрузите
      </Text>
      <input type="file" hidden onChange={onChange} name={name}/>
    </StyledUploadButton>
  );
}

export default FileInput;
