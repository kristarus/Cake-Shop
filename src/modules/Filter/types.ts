import React from "react";

export interface IFilterProps {
  className?: string;
  type: "cakes" | "cupcakes" | "pies" | "popular";
  min: string;
  max: string;
  device: "mobile" | "desktop";
  onClick?: () => void;
  display?: "none" | "block";
}
