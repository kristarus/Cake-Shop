import React from "react";

export interface ICatalogItemProps {
  className?: string;
  params: {
    id: string;
    img: string;
    name: string;
    structure: string;
    price: string;
    weight: string;
    leaf: string;
    isPie: boolean;
    type: string;
    filter: object;
  };
}
