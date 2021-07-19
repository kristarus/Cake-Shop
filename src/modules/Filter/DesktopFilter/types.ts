import React from "react";

export interface IDesktopFilterProps {
  className?: string;
  type: "cakes" | "cupcakes" | "pies" | "popular";
  min: string;
  max: string;
}
