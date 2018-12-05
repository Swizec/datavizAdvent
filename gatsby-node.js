const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope')

GLOBAL.self = GLOBAL

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx(
              sort: { fields: [frontmatter___date], order: ASC }
              limit: 1000
            ) {
              edges {
                node {
                  code {
                    scope
                  }
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allMdx.edges

        posts.forEach(({ node }, index) => {
          const previous = index === 0 ? null : posts[index - 1].node
          const next = index === posts.length - 1 ? null : posts[index + 1].node

          createPage({
            path: node.fields.slug,
            // component: path.resolve('./src/templates/blog-post.js'),
            component: componentWithMDXScope(
              path.resolve('./src/templates/blog-post.js'),
              node.code.scope
            ),
            context: {
              slug: node.fields.slug,
              previous,
              next,
            },
          })
        })
        resolve()
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({
      node,
      getNode,
    })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      // plugins: [
      //   plugins.define({
      //     self: stage === `build-javascript` || stage === `build-html`,
      //   }),
      // ],
    },
  })
}
