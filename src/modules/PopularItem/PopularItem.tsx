import PopularItemReverse from "./PopularItemReverse";
import PopularItemRight from "./PopularItemRight";
import { IPopularItemProps } from "./types";

function PopularItem({ orientation, img }: IPopularItemProps) {
  return orientation === "right" ? (
    <PopularItemRight img={img} />
  ) : (
    <PopularItemReverse img={img} />
  );
}

export default PopularItem;
