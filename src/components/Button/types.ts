import React from "react";

export interface IButtonProps {
  className?: string;
  textcolor: string;
  text: React.ReactNode;
  backgroundcolor: string;
  bordercolor: string;
  onClick: () => void;
  onSubmit?: React.FormEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}
