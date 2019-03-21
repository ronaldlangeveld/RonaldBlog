const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const createPosts = new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`./src/templates/blogTemplate.js`)
    resolve(
      graphql(`
                {
                    allGhostPost(
                        sort: {order: ASC, fields: published_at},
                        filter: {
                            slug: {ne: "data-schema"}
                        }
                    ) {
                        edges {
                            node {
                                slug
                            }
                        }
                    }
                }`
      ).then((result) => {
        if (result.errors) {
          return reject(result.errors)
        }

        if (!result.data.allGhostPost) {
          return resolve()
        }

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

  return Promise.all([createPosts])
}

