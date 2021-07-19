import React from "react";

export interface IButtonProps {
  className?: string;
  textColor: string;
  text: React.ReactNode;
  backgroundColor: string;
  borderColor: string;
  onClick: () => void;
  onSubmit?: React.FormEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}
