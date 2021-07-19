import React from "react";

export interface INavigationLinkProps {
  className?: string;
  children: React.ReactNode;
  externalLink?: boolean;
  openInNewTab?: boolean;
  href: string;
  onClick?: () => void;
}
