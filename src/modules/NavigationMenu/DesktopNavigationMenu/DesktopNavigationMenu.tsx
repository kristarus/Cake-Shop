import {
  MenuItemsWrapper,
  StyledMenuBar,
  StyledMenuBarItem,
  StyledBasketIcon,
  StyledLogo,
} from "./DesktopNavigationMenuStyles";
import { Text, IconButton, NavigationLink } from "components";
import { DropdownMenu } from "modules";
import { pageRoutes } from "constants/pageRoutes";
import { COLORS } from "constants/colors";

function NavigationMenu() {
  const DropdownMenuItems: string[] = [
    "Капкейки",
    "Торты",
    "Кексы",
    "Популярные",
  ];
  const DropdownMenuPages: string[] = [
    pageRoutes.CAPCAKES,
    pageRoutes.PIES,
    pageRoutes.CAKES,
    pageRoutes.POPULAR,
  ];

  return (
    <div>
      <StyledMenuBar>
        <a href={pageRoutes.MAIN}>
          <StyledLogo />
        </a>
        <MenuItemsWrapper>
          <DropdownMenu
            name="Каталог ∨"
            params={DropdownMenuItems}
            hrefs={DropdownMenuPages}
          />
          <NavigationLink href={pageRoutes.DEGUSTATION}>
            <StyledMenuBarItem>Дегустация</StyledMenuBarItem>
          </NavigationLink>
          <NavigationLink href={pageRoutes.INFORMATION}>
            <StyledMenuBarItem>О наc</StyledMenuBarItem>
          </NavigationLink>
          <Text
            type="h4"
            color={COLORS.DARK_GREY}
            fontFamily="OpenSansLight"
            underline={true}
          >
            +375 29 222 22 22
          </Text>
          <NavigationLink href={pageRoutes.ORDER}>
            <IconButton bgcolor="transparent" onClick={() => {}}>
              <StyledBasketIcon />
            </IconButton>
          </NavigationLink>
        </MenuItemsWrapper>
      </StyledMenuBar>
    </div>
  );
}

export default NavigationMenu;
