import * as Yup from "yup";

export const formikConfig = {
  initialValues: {
    min: "",
    max: "",
  },
  onSubmit: () => {},
  validateOnChange: false,
  validateOnBlur: false,
  validateOnMount: false,
};
