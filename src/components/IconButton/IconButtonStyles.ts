import styled from "styled-components";
import { IconButton } from "@material-ui/core";

interface IIconButtonProps {
  bgcolor: string;
}

export const StyledIconButton = styled(IconButton)`
  width: 60px;
  height: 60px;
  background-color: ${({ bgcolor }: IIconButtonProps) => bgcolor} !important;
`;
