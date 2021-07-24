import { NavigationMenu, SectionCatalog, Contacts } from "modules";
import { Root, GreyBGWrapper } from "./CatalogPopularPageStyles";

function CatalogPopularPage() {
  return (
    <Root>
      <GreyBGWrapper>
        <NavigationMenu />
      </GreyBGWrapper>
      <SectionCatalog header="ПОПУЛЯРНЫЕ" page="popular" />
      <Contacts />
    </Root>
  );
}

export default CatalogPopularPage;
