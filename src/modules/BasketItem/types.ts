import React from "react";

export interface IBasketItemProps {
  className?: string;
  event: () => void
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
