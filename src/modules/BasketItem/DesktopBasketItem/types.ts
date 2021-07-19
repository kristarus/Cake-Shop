import React from "react";

export interface IDesktopBasketItemProps {
  className?: string;
  event: () => void;
  params: {
    id: string;
    img: string;
    name: string;
    price: string;
    count: number;
    isPie?: boolean;
    filling?: string;
    isDegustationBox?: boolean;
  };
}

export interface IItemBasketProps {
  id: string;
  img: string;
  name: string;
  price: string;
  count: number;
  isPie?: boolean;
  filling?: string;
  isDegustationBox?: boolean;
}

export interface IItemProps {
  id: string;
  img: string;
  name: string;
  price: string;
  count: number;
  isPie?: boolean;
  filling?: string;
  isDegustationBox?: boolean;
}
