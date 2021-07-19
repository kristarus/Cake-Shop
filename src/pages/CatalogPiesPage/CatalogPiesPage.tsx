import { NavigationMenu, SectionCatalog, Contacts } from "modules";
import { Root, GreyBGWrapper } from "./CatalogPiesPageStyles";

function CatalogPiesPage() {
  return (
    <Root>
      <GreyBGWrapper>
        <NavigationMenu />
      </GreyBGWrapper>
      <SectionCatalog header="ТОРТЫ" page="pies" />
      <Contacts />
    </Root>
  );
}

export default CatalogPiesPage;
