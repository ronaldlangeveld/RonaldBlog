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


  const createPages = new Promise((resolve, reject) => {
    const pageTemplate = path.resolve(`./src/templates/pageTemplate.js`)
    resolve(
        graphql(`
            {
                allGhostPage(
                    sort: {order: ASC, fields: published_at}
                ) {
                    edges {
                        node {
                            slug
                            url
                        }
                    }
                }
            }`
        ).then((result) => {
            if (result.errors) {
                return reject(result.errors)
            }

            if (!result.data.allGhostPage) {
                return resolve()
            }

            const items = result.data.allGhostPage.edges

            items.forEach(({ node }) => {
                // This part here defines, that our pages will use
                // a `/:slug/` permalink.
                node.url = `/${node.slug}/`

                createPage({
                    path: node.url,
                    component: path.resolve(pageTemplate),
                    context: {
                        // Data passed to context is available
                        // in page queries as GraphQL variables.
                        slug: node.slug,
                    },
                })
            })

            return resolve()
        })
    )
})

  return Promise.all([createPosts, createPages])
}

