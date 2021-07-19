import React from "react";
import { useState } from "react";
import {
  MenuWrapper,
  StyledMenuIcon,
  StyledBasketIcon,
  StyledLogo,
  StyledDrawer,
  StyledListItemText,
} from "./MobileNavigationMenuStyles";
import { NavigationLink, IconButton } from "components";
import { pageRoutes } from "constants/pageRoutes";
import { COLORS } from "constants/colors";
import { List, ListItem } from "@material-ui/core";

function MobileNavigationMenu() {
  const DropdownMenuItems: string[] = ["Дегустация", "О нас"];
  const CatalogItems: string[] = ["Капкейки", "Торты", "Кексы", "Популярные"];
  const DropdownMenuPages: string[] = [
    pageRoutes.DEGUSTATION,
    pageRoutes.INFORMATION,
  ];
  const CatalogItemsPages: string[] = [
    pageRoutes.CAPCAKES,
    pageRoutes.PIES,
    pageRoutes.CAKES,
    pageRoutes.POPULAR,
  ];

  const [state, setState] = useState(false);
  const [catalog, setCatalog] = useState("none");

  const handleCatalogClick = () => {
    catalog === "none" ? setCatalog("block") : setCatalog("none");
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
      if (open) setCatalog("none");
    };

  const list = () => (
    <List>
      {DropdownMenuItems.map((item, index) => (
        <NavigationLink href={DropdownMenuPages[index]} key={item + index}>
          <ListItem button>
            <StyledListItemText primary={item} />
          </ListItem>
        </NavigationLink>
      ))}
      <ListItem button key="Каталог ∨" onClick={handleCatalogClick}>
        <StyledListItemText primary="Каталог ∨" />
      </ListItem>
      {CatalogItems.map((item, index) => (
        <div style={{ display: catalog }} key={item + index + Math.random()}>
          <NavigationLink href={CatalogItemsPages[index]}>
            <ListItem button key={item}>
              <StyledListItemText primary={item} />
            </ListItem>
          </NavigationLink>
        </div>
      ))}
    </List>
  );

  return (
    <MenuWrapper>
      <NavigationLink href={pageRoutes.MAIN}>
        <StyledLogo />
      </NavigationLink>
      <NavigationLink href={pageRoutes.ORDER}>
        <IconButton bgcolor={COLORS.LIGHT_GREY} onClick={() => {}}>
          <StyledBasketIcon />
        </IconButton>
      </NavigationLink>
      <IconButton bgcolor={COLORS.LIGHT_GREY} onClick={toggleDrawer(true)}>
        <StyledMenuIcon />
      </IconButton>
      <StyledDrawer anchor="right" open={state} onClose={toggleDrawer(false)}>
        {list()}
      </StyledDrawer>
    </MenuWrapper>
  );
}

export default MobileNavigationMenu;
