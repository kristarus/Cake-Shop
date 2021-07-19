import { NavigationMenu, SectionCatalog, Contacts } from "modules";
import { Root, GreyBGWrapper } from "./CatalogCapcakesPageStyles";

function CatalogCapcakesPage() {
  return (
    <Root>
      <GreyBGWrapper>
        <NavigationMenu />
      </GreyBGWrapper>
      <SectionCatalog header="КАПКЕЙКИ" page="cupcakes" />
      <Contacts />
    </Root>
  );
}

export default CatalogCapcakesPage;
