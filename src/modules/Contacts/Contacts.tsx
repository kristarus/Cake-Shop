import { useState, useCallback, useRef } from "react";
import ResizeDetector from "react-resize-detector";
import DesktopContacts from "./DesktopContacts";
import MobileContacts from "./MobileContacts";

function Contacts() {
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
        {size > 650 ? <DesktopContacts /> : <MobileContacts />}
      </div>
    </ResizeDetector>
  );
}

export default Contacts;
