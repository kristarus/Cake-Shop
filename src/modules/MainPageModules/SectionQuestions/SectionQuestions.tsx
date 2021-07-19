import { useState, useCallback, useRef } from "react";
import { QuestionForm } from "modules";
import { Root } from "./SectionQuestionsStyles";
import { Text } from "components";
import { COLORS } from "constants/colors";

function SectionQuestions() {
  return (
    <Root>
      <Text
        type="h2"
        color={COLORS.DARK_GREY}
        fontFamily="OpenSansBold"
        align="center"
      >
        Остались вопросы?
      </Text>
      <Text
        type="p"
        color={COLORS.DARK_GREY}
        fontFamily="OpenSansLight"
        align="center"
      >
        Оставьте заявку и мы перезвоним вам, чтобы рассказать больше о наших
        десертах
      </Text>
      <QuestionForm />
    </Root>
  );
}

export default SectionQuestions;
