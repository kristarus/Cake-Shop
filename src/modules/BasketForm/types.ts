export interface IBasketFormProps {
  onClick?: () => void;
  confirmEvent: () => void;
  eventState: boolean;
  display?: "none" | "block";
}
