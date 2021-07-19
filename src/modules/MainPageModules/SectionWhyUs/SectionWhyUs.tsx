import { useState, useCallback, useRef } from "react";
import ResizeDetector from "react-resize-detector";
import DesktopSectionWhyUs from "./DesktopSectionWhyUs";
import MobileSectionWhyUs from "./MobileSectionWhyUs";

function SectionWhyUs() {
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
        {size > 900 ? <DesktopSectionWhyUs /> : <MobileSectionWhyUs />}
      </div>
    </ResizeDetector>
  );
}

export default SectionWhyUs;
