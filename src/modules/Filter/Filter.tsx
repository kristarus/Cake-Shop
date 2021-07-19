import { IFilterProps } from "./types";
import DesktopFilter from "./DesktopFilter";
import MobileFilter from "./MobileFilter";

function Filter({
  type,
  min,
  max,
  device,
  onClick = () => {},
  display = "none",
}: IFilterProps) {
  return (
    <>
      {device === "desktop" ? (
        <DesktopFilter type={type} min={min} max={max} />
      ) : (
        <MobileFilter
          type={type}
          min={min}
          max={max}
          onClick={onClick}
          display={display}
        />
      )}
    </>
  );
}

export default Filter;
