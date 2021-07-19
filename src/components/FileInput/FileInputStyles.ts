import styled from "styled-components";
import { Button } from "@material-ui/core";

interface IStyledUploadButtonProps {
  component: string;
}

export const StyledUploadButton = styled(Button)<IStyledUploadButtonProps>`
  padding: 0 !important;
  margin: 7px 3px !important;
  &:hover {
    background-color: transparent !important;
  }
`;
