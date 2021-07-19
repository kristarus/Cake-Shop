import React from "react";

export interface ITextProps {
  className?: string;
  color: string;
  fontFamily: string;
  children: React.ReactNode;
  type?: "h1" | "h2" | "h3" | "h4" | "p" | "description";
  underline?: boolean;
  align?: string;
}
