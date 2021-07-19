import { useState, useRef } from "react";
import {
  IndOrderFormWrapper,
  IndOrderInputsWrapper,
  TextWrapper,
  UploadInputWrapper,
  ImageNameWrapper,
  StyledCloseButton,
} from "./DesktopIndividualOrderFormStyles";
import { COLORS } from "constants/colors";
import { Input, Text, FileInput } from "components";
import { Button } from "components";
import { useFormik } from "formik";
import { formikConfig } from "../data";
import { useDispatch } from "react-redux";
import { requestsActionTypes } from "modules/Requests/redux/requestsSlice";

function DesktopIndividualOrderForm() {
  const dispatch = useDispatch();
  const [File, setFile] = useState<any>("");
  const [FileName, setFileName] = useState("");
  const [FormState, setFormState] = useState(true);
  const formRef = useRef<any>(null);

  const checkValid = (errors: any) => {
    if (errors.name || errors.phone) {
      setFormState(false);
    } else {
      setFormState(true);
    }
  };

  const handleSubmitForm = (data: any, formikHelpers: any) => {
    // const copiedData = {
    //   name: data.name.trim(),
    //   phone: data.phone.trim(),
    //   description: data.description,
    //   file: File,
    // };
    // console.log(copiedData);
    const idForm: any = document.getElementById("my-form");
    console.log(idForm);
    const form = new FormData(idForm);
    // form.append("name", data.name.trim());
    // form.append("phone", data.phone.trim());
    // form.append("description", data.description);
    // form.append("file", File);
    for (let key in form.entries()) {
      console.log("key", key);
    }
    console.log(form.values());

    if (FormState) dispatch(requestsActionTypes.sendFileThunk(form));
    formikHelpers.resetForm();
  };

  const formik = useFormik({
    ...formikConfig,
    onSubmit: handleSubmitForm,
  });

  const isValid = () => {
    checkValid(formik.errors);
  };

  const handleChange = (event: any) => {
    let reader = new FileReader();
    const param = event.target.files[0];
    reader.readAsDataURL(param);

    reader.onload = (e: any) => {
      setFile(e.target?.result);
    };
    setFileName(event.target.files[0].name);
  };

  const sliceFileName = (FileName: string): JSX.Element => {
    if (FileName.length > 20)
      return (
        <ImageNameWrapper>
          <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansLight">
            {FileName.slice(0, 20) + "..."}
          </Text>
          <StyledCloseButton onClick={handleDeleteFile}>x</StyledCloseButton>
        </ImageNameWrapper>
      );
    else if (FileName.length === 0) return <></>;
    else
      return (
        <ImageNameWrapper>
          <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansLight">
            {FileName}
          </Text>
          <StyledCloseButton onClick={handleDeleteFile}>x</StyledCloseButton>
        </ImageNameWrapper>
      );
  };

  const handleDeleteFile = () => {
    setFileName("");
    setFile("");
  };

  console.log(FormState);
  return (
    <IndOrderFormWrapper onSubmit={formik.handleSubmit} id="my-form">
      <TextWrapper>
        <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
          Оставьте заявку и мы перезвоним вам в течение 15 минут
        </Text>
      </TextWrapper>
      <IndOrderInputsWrapper>
        <Input
          name="name"
          placeholder="Ваше имя"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
          width="45%"
          borderColor="transparent"
        />
        <Input
          name="phone"
          placeholder="Ваш телефон"
          value={formik.values.phone}
          width="45%"
          borderColor="transparent"
          onChange={formik.handleChange}
          error={formik.errors.phone}
        />
      </IndOrderInputsWrapper>
      <Input
        multiline
        rows={6}
        name="description"
        placeholder="Опишите ваш торт"
        value={formik.values.description}
        width="80%"
        borderColor="transparent"
        onChange={formik.handleChange}
      />
      <UploadInputWrapper>
        <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
          Или
        </Text>
        <FileInput onChange={handleChange} name="file" />
        <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
          фотографию
        </Text>
      </UploadInputWrapper>
      {sliceFileName(FileName)}
      <Button
        backgroundColor={COLORS.WHITE}
        textColor={COLORS.DARK_GREY}
        borderColor={COLORS.DARK_GREY}
        text="Отправить"
        onClick={() => {}}
        type="submit"
        onSubmit={isValid}
      />
    </IndOrderFormWrapper>
  );
}

export default DesktopIndividualOrderForm;
