import { useState, useCallback, useRef } from "react";
import ResizeDetector from "react-resize-detector";
import DesktopSectionCatalog from "./DesktopSectionCatalog";
import MobileSectionCatalog from "./MobileSectionCatalog";
import { ISectionCatalogProps } from "./types";

function SectionCatalog({ header, page }: ISectionCatalogProps) {
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
        {size > 900 ? (
          <DesktopSectionCatalog header={header} page={page} />
        ) : (
          <MobileSectionCatalog header={header} page={page} />
        )}
      </div>
    </ResizeDetector>
  );
}

export default SectionCatalog;
