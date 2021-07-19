import { useState, MouseEvent } from "react";
import { StyledButton, StyledMenu, StyledMenuItem } from "./DropdownMenuStyles";
import { IDropdownMenuProps } from "./types";
import { NavigationLink } from "components";

function DropdownMenu({ params, hrefs, name }: IDropdownMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const createMenuItems = () => {
    return params.map(function (item: string, index: number) {
      return (
        <NavigationLink href={hrefs[index]} key={item + index}>
          <StyledMenuItem onClick={handleClose}>{item}</StyledMenuItem>
        </NavigationLink>
      );
    });
  };

  return (
    <div>
      <StyledButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {name}
      </StyledButton>
      <StyledMenu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {createMenuItems()}
      </StyledMenu>
    </div>
  );
}

export default DropdownMenu;
