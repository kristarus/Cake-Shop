import { useState, useEffect } from "react";
import { COLORS } from "constants/colors";
import { Text } from "components";
import { ItemCounterWrapper, StyledCounterButton } from "./ItemCounterStyles";
import { IItemCounterProps } from "./types";

function ItemCounter({
  initialCount = 1,
  event = () => {},
  onClick = () => {},
}: IItemCounterProps) {
  const [Count, setCount] = useState(initialCount);

  // console.log(Count);

  const handleIncrement = () => {
    setCount(Count + 1);
  };

  const handleDecrement = () => {
    if (Count > 0) setCount(Count - 1);
  };

  useEffect(() => {
    handleClick();
    return () => {};
  }, [Count]);

  const handleClick = () => {
    onClick(Count);
  };

  return (
    <ItemCounterWrapper>
      <StyledCounterButton onClick={handleDecrement}>-</StyledCounterButton>
      <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansLight">
        {Count}
      </Text>
      <StyledCounterButton onClick={handleIncrement}>+</StyledCounterButton>
    </ItemCounterWrapper>
  );
}

export default ItemCounter;
