import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const commonLinkStyles = css`
  text-decoration: none;
`;

export const InternalLink = styled(NavLink)`
  ${commonLinkStyles}
`;

export const ExternalLink = styled.a`
  ${commonLinkStyles}
`;
