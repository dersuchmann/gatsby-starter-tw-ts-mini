/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */


import { createRequire } from "module";
const require = createRequire(import.meta.url);

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
export const createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.tsx"),
    context: {},
    defer: true,
  })
};
