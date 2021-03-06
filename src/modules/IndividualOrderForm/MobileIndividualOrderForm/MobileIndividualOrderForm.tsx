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
          ???????????????? ???????????? ?? ???? ???????????????????? ?????? ?? ?????????????? 15 ??????????
        </Text>
      </TextWrapper>
      <InputsWrapper>
        <Input
          name="name"
          placeholder="???????? ??????"
          width="100%"
          bordercolor="transparent"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <Input
          name="phone"
          placeholder="?????? ??????????????"
          width="100%"
          bordercolor="transparent"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.errors.phone}
        />
        <Input
          multiline
          rows={6}
          name="description"
          placeholder="?????????????? ?????? ????????"
          width="100%"
          bordercolor="transparent"
          value={formik.values.description}
          onChange={formik.handleChange}
        />
      </InputsWrapper>
      <UploadInputWrapper>
        <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
          ??????
        </Text>
        <FileInput onChange={handleChange} name="photo" />
        <Text type="p" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
          ????????????????????
        </Text>
      </UploadInputWrapper>
      {sliceFileName()}
      <Button
        backgroundcolor={COLORS.WHITE}
        textcolor={COLORS.DARK_GREY}
        bordercolor={COLORS.DARK_GREY}
        text="??????????????????"
        onClick={() => {}}
        type="submit"
        onSubmit={isValid}
      />
    </IndOrderFormWrapper>
  );
}

export default MobileIndividualOrderForm;
