import { ExternalLink, InternalLink } from "./NavigationLinkStyles";
import {INavigationLinkProps} from './types'

function NavigationLink({
  children,
  externalLink = false,
  openInNewTab = false,
  onClick,
  href,
}: INavigationLinkProps) {
  return externalLink ? (
    <ExternalLink
      // eslint-disable-next-line no-script-url
      href={href || "javascript:void(0)"}
      onClick={onClick}
      role="link"
      target={openInNewTab ? "_blank" : "_self"}
    >
      {children}
    </ExternalLink>
  ) : (
    <InternalLink
      exact
      onClick={onClick}
      role="link"
      target={openInNewTab ? "_blank" : "_self"}
      to={href}
    >
      {children}
    </InternalLink>
  );
}
export default NavigationLink;
