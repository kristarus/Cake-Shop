import React from "react";

export interface IMobileFilterProps {
  className?: string;
  type: "cakes" | "cupcakes" | "pies" | "popular";
  min: string;
  max: string;
  display: "none" | "block";
  onClick: () => void;
}
