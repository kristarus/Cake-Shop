import { useState, useCallback, useRef } from "react";
import ResizeDetector from "react-resize-detector";
import DesktopSectionMakeOrder from "./DesktopSectionMakeOrder";
import MobileSectionMakeOrder from "./MobileSectionMakeOrder";

function SectionMakeOrder() {
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
        {size > 900 ? <DesktopSectionMakeOrder /> : <MobileSectionMakeOrder />}
      </div>
    </ResizeDetector>
  );
}

export default SectionMakeOrder;
