import * as React from "react";
import tw, { css, styled } from "twin.macro";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "../styles/global.css"; // import global styles here

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        css={tw`my-0 mx-auto max-w-[var(--size-content)] p-[var(--size-gutter)]`}
      >
        <main>{children}</main>
        <footer css={tw`mt-8 text-sm`}>
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
