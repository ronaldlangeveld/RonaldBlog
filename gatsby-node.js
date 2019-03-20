const path = require("path")
const _ = require(`lodash`)
const Promise = require(`bluebird`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const createPosts = new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`./src/templates/blogTemplate.js`)
    resolve(
      graphql(`
        {
          allGhostPost(sort: { order: ASC, fields: published_at }) {
            edges {
              node {
                id
                slug
                title
                html
                published_at
              }
            }
          }
        }
      `).then(result => {
        const items = result.data.allGhostPost.edges

        _.forEach(items, ({ node }) => {
          node.url = `/${node.slug}/`
          createPage({
            path: node.url,
            component: path.resolve(postTemplate),
            context: {
              slug: node.slug,
            },
          })
        })

        return resolve()
      })
    )
  })

  return Promise.all(createPosts)
}