import { useState, useCallback, useRef } from "react";
import ResizeDetector from "react-resize-detector";
import DesktopSectionAboutBox from "./DesktopSectionAboutBox";
import MobileSectionAboutBox from "./MobileSectionAboutBox";

function SectionAboutBox() {
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
        {size > 900 ? <DesktopSectionAboutBox /> : <MobileSectionAboutBox />}
      </div>
    </ResizeDetector>
  );
}

export default SectionAboutBox;
