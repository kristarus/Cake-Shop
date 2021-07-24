import { useState } from "react";
import { COLORS } from "constants/colors";
import { QuestionFormWrapper } from "./MobileQuestionFormStyles";
import { Input, Button } from "components";
import { useFormik } from "formik";
import { formikConfig } from "../data";

function MobileQuestionForm() {
  const [FormState, setFormState] = useState(true);

  const checkValid = (errors: any) => {
    if (errors.firstName || errors.lastName || errors.password) {
      setFormState(false);
    } else setFormState(true);
  };

  const handleSubmitForm = (data: any, formikHelpers: any) => {
    const copiedData = {
      name: data.name.trim(),
      phone: data.phone.trim(),
    };
    console.log(copiedData);
    formikHelpers.resetForm();
  };

  const formik = useFormik({
    ...formikConfig,
    onSubmit: handleSubmitForm,
  });

  const isValid = () => checkValid(formik.errors);
  console.log(FormState);

  return (
    <QuestionFormWrapper>
      <Input
        name="name"
        placeholder="Ваше имя"
        value={formik.values.name}
        width="100%"
        bordercolor={COLORS.DARK_GREY}
        onChange={formik.handleChange}
        error={formik.errors.name}
      />
      <Input
        name="phone"
        placeholder="Номер телефона"
        value={formik.values.phone}
        width="100%"
        bordercolor={COLORS.DARK_GREY}
        onChange={formik.handleChange}
        error={formik.errors.phone}
      />
      <Button
        backgroundcolor={COLORS.DARK_GREY}
        textcolor={COLORS.WHITE}
        bordercolor={COLORS.DARK_GREY}
        text="Отправить"
        onClick={() => {}}
        type="submit"
        onSubmit={isValid}
      />
    </QuestionFormWrapper>
  );
}

export default MobileQuestionForm;
