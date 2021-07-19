import { useState, useCallback, useRef } from "react";
import ResizeDetector from "react-resize-detector";
import DesktopBasketForm from "./DesktopBasketForm";
import MobileBasketForm from "./MobileBasketForm";
import { IBasketFormProps } from "./types";

function BasketForm({
  onClick = () => {},
  confirmEvent = () => {},
  display = "none",
  eventState,
}: IBasketFormProps) {
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
        {size > 200 ? (
          <DesktopBasketForm
            eventState={eventState}
            confirmEvent={confirmEvent}
          />
        ) : (
          <MobileBasketForm
            onClick={onClick}
            display={display}
            eventState={eventState}
            confirmEvent={confirmEvent}
          />
        )}
      </div>
    </ResizeDetector>
  );
}

export default BasketForm;
