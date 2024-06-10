import * as React from "react";
import tw, { css, styled } from "twin.macro";
import { Link } from "gatsby";

type HeaderProps = {
  siteTitle: string;
};

const Header = ({ siteTitle }: HeaderProps) => (
  <header
    css={tw`my-0 mx-auto py-6 px-[var(--size-gutter)] flex items-center justify-between`}
  >
    <Link to="/" css={tw`text-sm decoration-0`}>
      {siteTitle}
    </Link>
  </header>
);

export default Header;
