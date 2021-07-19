import { IMobileFilterProps } from "./types";
import ModalFilterHeaders from "./ModalFilterHeaders";

function MobileFilter({
  type,
  min,
  max,
  onClick,
  display,
}: IMobileFilterProps) {
  return (
    <ModalFilterHeaders
      type={type}
      min={min}
      max={max}
      display={display}
      onClick={onClick}
    />
  );
}

export default MobileFilter;
