import { useState, useCallback, useRef } from "react";
import ResizeDetector from "react-resize-detector";
import DesktopBasketItem from "./DesktopBasketItem";
import MobileBasketItem from "./MobileBasketItem";
import { IBasketItemProps } from "./types";

function BasketItem({ params, event }: IBasketItemProps) {
  const rootNode = useRef(null);
  const [size, setSize] = useState<number>(0);
  const onResize = useCallback((width?: number, height?: number) => {
    setSize(width || 0);
  }, []);

  return (
    <ResizeDetector
      handleHeight
      handleWidth
      targetRef={rootNode}
      onResize={onResize}
    >
      <div ref={rootNode}>
        {size > 420 ? (
          <DesktopBasketItem params={params} event={event} />
        ) : (
          <MobileBasketItem params={params} event={event} />
        )}
      </div>
    </ResizeDetector>
  );
}

export default BasketItem;
