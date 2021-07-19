import {
  IndOrderFormWrapper,
  InputsWrapper,
  TextWrapper,
  UploadInputWrapper,
  ImageNameWrapper,
  StyledCloseButton,
} from "./MobileIndividualOrderFormStyles";
import { COLORS } from "constants/colors";
import { Input, Text, FileInput } from "components";
import { useState } from "react";
import { Button } from "components";
import { useFormik } from "formik";
import { formikConfig } from "../data";

function MobileIndividualOrderForm() {
  const [File, setFile] = useState("");
  const [FileName, setFileName] = useState("");
  const [FormState, setFormState] = useState(true);

  const checkValid = (errors: any) => {
    if (errors.name || errors.phone) {
      setFormState(false);
    } else {
      setFormState(true);
    }
  };

  const handleSubmitForm = (data: any, formikHelpers: any) => {
    const copiedData = {
      name: data.name.trim(),
      phone: data.phone.trim(),
      description: data.description,
      photo: File,
    };
    console.log(copiedData);
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
    reader.onload = (e: any) => {
      setFile(e.target?.result);
    };
    reader.readAsDataURL(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const sliceFileName = (): JSX.Element => {
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
    <IndOrderFormWrapper onSubmit={formik.handleSubmit}>
      <TextWrapper>
        <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
          Оставьте заявку и мы перезвоним вам в течение 15 минут
        </Text>
      </TextWrapper>
      <InputsWrapper>
        <Input
          name="name"
          placeholder="Ваше имя"
          width="100%"
          borderColor="transparent"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <Input
          name="phone"
          placeholder="Ваш телефон"
          width="100%"
          borderColor="transparent"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.errors.phone}
        />
        <Input
          multiline
          rows={6}
          name="description"
          placeholder="Опишите ваш торт"
          width="100%"
          borderColor="transparent"
          value={formik.values.description}
          onChange={formik.handleChange}
        />
      </InputsWrapper>
      <UploadInputWrapper>
        <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
          Или
        </Text>
        <FileInput onChange={handleChange} name="photo" />
        <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
          фотографию
        </Text>
      </UploadInputWrapper>
      {sliceFileName()}
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

export default MobileIndividualOrderForm;
