import { NavigationMenu, SectionCatalog, Contacts } from "modules";
import { Root, GreyBGWrapper } from "./CatalogCakesPageStyles";

function CatalogCakesPage() {
  return (
    <Root>
      <GreyBGWrapper>
        <NavigationMenu />
      </GreyBGWrapper>
      <SectionCatalog header="КЕКСЫ" page="cakes" />
      <Contacts />
    </Root>
  );
}

export default CatalogCakesPage;
