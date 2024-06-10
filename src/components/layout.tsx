/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

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
        css={css`
          margin: 0 auto;
          max-width: var(--size-content);
          padding: var(--size-gutter);
        `}
      >
        <main>{children}</main>
        <footer
          css={css`
            margin-top: var(--space-5);
            font-size: var(--font-sm);
          `}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
