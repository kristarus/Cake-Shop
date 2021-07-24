import React from "react";

export interface IInputProps {
  className?: string;
  error?: string;
  name: string;
  value: string;
  placeholder?: string;
  bordercolor: string;
  width: string;
  multiline?: boolean;
  rows?: number;
  type?: string;
  onChange: (e: string | React.ChangeEvent<any>) => void;
  onBlur?: () => void;
}
