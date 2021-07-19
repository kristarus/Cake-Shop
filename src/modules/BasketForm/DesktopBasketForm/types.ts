export interface IItemBasketProps {
  id: number;
  img: string;
  name: string;
  price: string;
  count: number;
  filling: string;
  isPie: boolean;
}

export interface IBasketFormProps {
  eventState: boolean;
  confirmEvent: () => void;
}
