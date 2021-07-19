import React from "react";

export interface IFilterRadioProps {
  className?: string;
  label: string;
  checked?: boolean;
  params: {
    name: string;
    options: string[];
  };
  type: string;
  onClick: () => void;
}
