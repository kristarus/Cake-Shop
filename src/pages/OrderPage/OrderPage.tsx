import { useState } from "react";
import { NavigationMenu, SectionBasket, Contacts } from "modules";

function OrderPage() {
  return (
    <>
      <NavigationMenu />
      <SectionBasket />
      <Contacts />
    </>
  );
}

export default OrderPage;
