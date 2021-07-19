import React from "react";

export interface IMobileFilterProps {
  className?: string;
  type: "cakes" | "cupcakes" | "pies" | "popular";
  category: string | undefined;
  display: "none" | "block";
  onClick: () => void;
}
