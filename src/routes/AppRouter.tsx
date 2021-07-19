import { Switch, Route, Redirect } from "react-router-dom";
import { pageRoutes } from "constants/pageRoutes";
import {
  Page404,
  PresentationPage,
  CatalogCapcakesPage,
  CatalogCakesPage,
  CatalogPiesPage,
  CatalogPopularPage,
  DegustationPage,
  OrderPage,
  InformationPage,
  MainPage,
} from "pages";

function AppRouter() {
  return (
    <Switch>
      <Route exact path={pageRoutes.PRESENTATION}>
        <PresentationPage />
      </Route>
      <Route exact path={pageRoutes.CAPCAKES}>
        <CatalogCapcakesPage />
      </Route>
      <Route exact path={pageRoutes.CAKES}>
        <CatalogCakesPage />
      </Route>
      <Route exact path={pageRoutes.PIES}>
        <CatalogPiesPage />
      </Route>
      <Route exact path={pageRoutes.POPULAR}>
        <CatalogPopularPage />
      </Route>
      <Route exact path={pageRoutes.DEGUSTATION}>
        <DegustationPage />
      </Route>
      <Route exact path={pageRoutes.ORDER}>
        <OrderPage />
      </Route>
      <Route exact path={pageRoutes.INFORMATION}>
        <InformationPage />
      </Route>
      <Route exact path={pageRoutes.MAIN}>
        <MainPage />
      </Route>
      {/* Special case: redirect to sign in from root page */}
      <Redirect exact from="/" to={pageRoutes.NOT_FOUND} />
      {/* Special case: if no route matched - show page 404 */}
      <Route>
        <Page404 />
      </Route>
    </Switch>
  );
}

export default AppRouter;
