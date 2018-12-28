/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// const path = require('path')

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const pages = await graphql(`
//     {
//       allShopifyProduct {
//         edges {
//           node {
//             id
//             handle
//           }
//         }
//       }
//     }
//   `)

//   pages.data.allShopifyProduct.edges.forEach(edge => {
//     createPage({
//       path: `/${edge.node.handle}`,
//       component: path.resolve('./src/templates/product.js'),
//       context: {
//         id: edge.node.id,
//       },
//     })
//   })
// }
