import { useState, useCallback, useRef } from "react";
import ResizeDetector from "react-resize-detector";
import DesktopIconRadioGroup from "./DesktopRadioGroup";
import MobileIconRadioGroup from "./MobileRadioGroup";
import { IIconRadioGroup } from "./types";

function IconRadioGroup({ onClick }: IIconRadioGroup) {
  const rootNode = useRef(null);
  const [size, setSize] = useState<number>(0);
  const onResize = useCallback((width?: number, height?: number) => {
    setSize(width || 0);
  }, []);

  const handleClick = (boxSize: "S" | "M" | "L") => {
    onClick(boxSize);
  };

  return (
    <ResizeDetector
      handleHeight
      handleWidth
      targetRef={rootNode}
      onResize={onResize}
    >
      <div ref={rootNode}>
        {size > 550 ? (
          <DesktopIconRadioGroup onClick={handleClick} />
        ) : (
          <MobileIconRadioGroup onClick={handleClick} />
        )}
      </div>
    </ResizeDetector>
  );
}

export default IconRadioGroup;
