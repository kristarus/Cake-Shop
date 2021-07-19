export interface IItemProps {
  id: string;
  img: string;
  isDegustationBox: boolean;
  name: string;
  price: string;
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
