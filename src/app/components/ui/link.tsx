import React from "react";
import NextLink from "next/link";

interface LinkProps {
  href: string;
  className?: string;
  children?: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, className, children }) => {
  return (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  );
};

export default Link;
