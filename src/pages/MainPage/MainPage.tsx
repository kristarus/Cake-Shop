import { Root } from "./MainPageStyles";
import {
  SectionMain,
  SectionAboutUs,
  SectionWhyUs,
  SectionPopular,
  SectionMakeOrder,
  SectionIndivOrder,
  SectionQuestions,
  Contacts,
} from "modules";

function MainPage() {
  return (
    <Root>
      <SectionMain />
      <SectionAboutUs />
      <SectionWhyUs />
      <SectionPopular />
      <SectionMakeOrder />
      <SectionIndivOrder />
      <SectionQuestions />
      <Contacts />
    </Root>
  );
}

export default MainPage;
