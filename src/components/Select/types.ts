import React from "react";

export interface ISelectProps {
  className?: string;
  params: string[];
  disabled?: boolean;
  value?: string;
  onChange?: (e: string | React.ChangeEvent<any>) => void;
  error?: string;
  name?: string;
}

export interface ISelectState {
  parameter: string;
}
