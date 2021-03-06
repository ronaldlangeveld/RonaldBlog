const path = require(`path`)
const generateRSSFeed = require(`./src/utils/rss/generate-feed`)
const config = require(`./src/utils/siteConfig`)

module.exports = {
    siteMetadata: {
      title: `Ronald Langeveld`,
      siteUrl: `https://www.ronaldlangeveld.com`,
      description: `Indie Software Developer, Ronald Langeveld, working on development projects for local and international clients. Living in South Africa and travels around Asia whilst working remotely.`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/src/posts`,
              name: "posts",
            },
          },
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `assets`,
              path: path.join(__dirname, `src`, `assets`),
            },
          },
          {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `Ronald Langeveld, Software Developer`,
              short_name: `Ronald Blog`,
              start_url: `/`,
              background_color: `#f7f0eb`,
              theme_color: `#a2466c`,
              // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
              // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
              display: `standalone`,
              icon: `src/assets/profile.jpg`, // This path is relative to the root of the site.
              include_favicon: true, // Include favicon
            },
          },
          {
            resolve: `gatsby-source-ghost`,
            options: {
                apiUrl: `https://ghost.ronaldlangeveld.com`,
                contentApiKey: `d6e44b087879227912673bda76`
            }
         },
          `gatsby-plugin-offline`,
          `gatsby-transformer-remark`,
          `gatsby-plugin-sharp`,
          `gatsby-transformer-sharp`,
          `gatsby-plugin-sitemap`,
          `gatsby-plugin-brotli`,
          {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                {
                    allGhostSettings {
                        edges {
                            node {
                                title
                                description
                            }
                        }
                    }
                }
              `,
                feeds: [
                    generateRSSFeed(config),
                ],
            },
        },

    ]
  }