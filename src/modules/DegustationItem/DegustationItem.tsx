import { useState, useCallback, useRef } from "react";
import ResizeDetector from "react-resize-detector";
import DesktopDegustationItem from "./DesktopDegustationItem";
import MobileDegustationItem from "./MobileDegustationItem";
import { IDegustationItemProps } from "./types";

function DegustationItem({ params }: IDegustationItemProps) {
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
          <DesktopDegustationItem params={params} />
        ) : (
          <MobileDegustationItem params={params} />
        )}
      </div>
    </ResizeDetector>
  );
}

export default DegustationItem;
