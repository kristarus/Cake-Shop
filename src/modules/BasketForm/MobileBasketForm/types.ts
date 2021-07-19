export interface IMobileBasketFormProps {
  onClick: () => void;
  display: "none" | "block";
  eventState: boolean;
  confirmEvent: () => void;
}

export interface IItemBasketProps {
  id: number;
  img: string;
  name: string;
  price: string;
  count: number;
  filling: string;
  isPie: boolean;
}
