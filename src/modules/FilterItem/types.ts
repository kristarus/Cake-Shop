import React from "react";

export interface IFilterItemProps {
  className?: string;
  params: {
    name: string;
    options: string[];
  };
  type: string;
}
