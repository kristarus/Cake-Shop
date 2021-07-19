import { useState, useCallback, useRef } from "react";
import ResizeDetector from "react-resize-detector";
import DesktopSectionPopular from "./DesktopSectionPopular";
import MobileSectionPopular from "./MobileSectionPopular";

function SectionPopular() {
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
        {size > 900 ? <DesktopSectionPopular /> : <MobileSectionPopular />}
      </div>
    </ResizeDetector>
  );
}

export default SectionPopular;
