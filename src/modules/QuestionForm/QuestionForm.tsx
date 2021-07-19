import { useState, useCallback, useRef } from "react";
import ResizeDetector from "react-resize-detector";
import DesktopQuestionForm from "./DesktopQuestionForm";
import MobileQuestionForm from "./MobileQuestionForm";

function QuestionForm() {
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
        {size > 600 ? <DesktopQuestionForm /> : <MobileQuestionForm />}
      </div>
    </ResizeDetector>
  );
}

export default QuestionForm;
