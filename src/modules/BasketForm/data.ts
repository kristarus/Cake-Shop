import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Это поле обязательное").trim(),
  phone: Yup.string().required("Это поле обязательное").trim(),
});

export const formikConfig = {
  initialValues: {
    name: "",
    phone: "",
    date: "",
    payment: "Оплата наличными",
    comment: "",
  },
  onSubmit: () => {},
  validateOnChange: false,
  validateOnBlur: false,
  validateOnMount: false,
  validationSchema: validationSchema,
};
