import React from "react";

export interface IModalCatalogItemProps {
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
  };
  display: "none" | "block";
  onClick: () => void;
}

export interface IItemBasketProps {
  id: string;
  img: string;
  name: string;
  price: string;
  count: number;
  filling?: string;
  isPie?: boolean;
  isDegustationBox?: boolean;
}

export interface IItemProps {
  id: string;
  img: string;
  name: string;
  structure: string;
  price: string;
  weight: string;
  leaf: string;
  isPie: boolean;
  type: string;
}
