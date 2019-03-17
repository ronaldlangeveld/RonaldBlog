const path = require(`path`)

module.exports = {
    siteMetadata: {
      title: `Ronald Langeveld`,
      siteUrl: `https://www.ronaldlangeveld.com`,
      description: `Indie Software Developer, Ronald Langeveld, working on full stack web projects for lcoal and international clients.`,
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
          `gatsby-transformer-remark`,
          `gatsby-plugin-sharp`,
          `gatsby-transformer-sharp`,
    ]
  }