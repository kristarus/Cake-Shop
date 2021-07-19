// import { COLORS } from "constants/colors";
// import {
//   Text,
//   Button,
//   IconButton,
//   Input,
//   FilterRadio,
//   Select,
//   Line,
// } from "components";
// import {
//   DropdownMenu,
//   NavigationMenu,
//   IconRadioGroup,
//   Contacts,
//   PopularItem,
//   IndividualOrderForm,
//   QuestionForm,
//   ItemCounter,
//   BasketForm,
//   DegustationItem,
//   BasketItem,
//   CatalogItem,
//   ModalCatalogItem,
//   FilterItem,
//   PriceFilter,
//   Filter,
// } from "modules";
// import { StyledBasketIcon } from "./PresentationPageStyles";
// import { pageRoutes } from "constants/pageRoutes";
// import { noPhoto } from "assets";

function PresentationPage() {
  // const DropdownMenuItems: string[] = [
  //   "Капкейки",
  //   "Торты",
  //   "Кексы",
  //   "Популярные",
  // ];
  // const DropdownMenuPages: string[] = [
  //   pageRoutes.CAPCAKES,
  //   pageRoutes.PIES,
  //   pageRoutes.CAKES,
  //   pageRoutes.POPULAR,
  // ];
  // const DegustationItemObject = {
  //   img: noPhoto,
  //   name: "Крем-брюле с шоколадом",
  //   weight: "100 гр",
  //   leaf: "95 кКал",
  // };
  // const BasketItemObject_1 = {
  //   img: noPhoto,
  //   name: "Крем-брюле с шоколадом",
  //   price: "45 BYN",
  //   isPie: false,
  // };
  // const BasketItemObject_2 = {
  //   img: noPhoto,
  //   name: "Чизкейк клубничный",
  //   price: "60 BYN",
  //   isPie: true,
  // };
  // const CatalogItemObject = {
  //   img: noPhoto,
  //   name: "Чизкейк шоколадный",
  //   price: "65 BYN",
  //   structure:
  //     "Миндальный бисквит, хрустящий слой с ореховым пралине из лесных орехов, крем-мусс из белого, молочного и тёмного шоколада.",
  //   weight: "540 гр",
  //   leaf: "135 кКал",
  //   isPie: true,
  // };
  // const FilterItemObject = {
  //   name: "Категории",
  //   options: ["Праздничные", "Свадебные", "Обычные"],
  // };
  return (
    <div>
      {/* <NavigationMenu />
      <br />
      <br />
      <Text type="h1" color={COLORS.DARK_GREY} fontFamily="BrittanySignature">
        H1 - Brittany Signature
      </Text>
      <Text type="h2" color={COLORS.DARK_GREY} fontFamily="OpenSansBold">
        H2 - Open Sans Bold
      </Text>
      <Text type="h3" color={COLORS.GREY} fontFamily="OpenSansLight">
        H3 - Open Sans Light
      </Text>
      <Text type="h4" color={COLORS.GREY} fontFamily="OpenSansLight">
        H4 - Open Sans Light
      </Text>
      <Text type="p" color={COLORS.GREY} fontFamily="OpenSansLight">
        P - Open Sans Light
      </Text>
      <Text type="description" color={COLORS.GREY} fontFamily="OpenSansLight">
        Description - Open Sans Light
      </Text>
      <br />
      <br />
      <Button
        backgroundColor={COLORS.DARK_GREY}
        textColor={COLORS.WHITE}
        borderColor={COLORS.DARK_GREY}
        text="Заказать торт"
        onClick={() => {}}
      />
      <br />
      <br />
      <Button
        backgroundColor={COLORS.WHITE}
        textColor={COLORS.DARK_GREY}
        borderColor={COLORS.DARK_GREY}
        text="Отправить"
        onClick={() => {}}
      />
      <br />
      <br />
      <IconButton bgcolor="white" onClick={() => {}}>
        <StyledBasketIcon />
      </IconButton>
      <br />
      <br />
      <Input
        name="name"
        placeholder="Ваше имя"
        value=""
        width="200px"
        borderColor={COLORS.DARK_GREY}
        onChange={() => {}}
      />
      <br />
      <br />
      <Input
        name="name"
        placeholder="Ваше имя"
        value=""
        width="200px"
        borderColor={COLORS.WHITE}
        onChange={() => {}}
      />
      <br />
      <br />
      <Line type="vertical" size="50px" color={COLORS.DARK_GREY} />
      <br />
      <Line type="horizontal" size="100px" color={COLORS.DARK_GREY} />
      <br />
      <br />
      <IconRadioGroup />
      <br />
      <br />
      <FilterRadio label="Шоколадные" onClick={() => {}} />
      <br />
      <br />
      <Select params={["Шоколадная", "Фруктово-ягодная", "Лимонная"]} />
      <br />
      <br />
      <DropdownMenu
        name="Каталог ∨"
        params={DropdownMenuItems}
        hrefs={DropdownMenuPages}
      />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <PopularItem orientation="right" img={noPhoto} />
        <PopularItem orientation="reverse" img={noPhoto} />
      </div>
      <br />
      <br />
      <IndividualOrderForm />
      <br />
      <br />
      <QuestionForm />
      <br />
      <br />
      <ItemCounter />
      <br />
      <br />
      <BasketForm />
      <br />
      <br />
      <DegustationItem params={DegustationItemObject} />
      <br />
      <br />
       <BasketItem params={BasketItemObject_1} />
      <br />
      <br />
      <BasketItem params={BasketItemObject_2} /> 
      <br />
      <br />
      <CatalogItem params={CatalogItemObject} onClick={() => {}} />
      <br />
      <br />
       <ModalCatalogItem params={CatalogItemObject} />
      <br />
      <br />
      <FilterItem params={FilterItemObject} />
      <br />
      <br />
      <PriceFilter min="7" max="120" />
      <br />
      <br />
      <Filter type="cakes" min="8" max="52" /> 
      <br />
      <br />
      <Contacts />
      <br />
      <br /> */}
    </div>
  );
}

export default PresentationPage;
