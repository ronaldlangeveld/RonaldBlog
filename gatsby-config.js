const path = require(`path`)

module.exports = {
    siteMetadata: {
      title: `Ronald Langeveld`,
      siteUrl: `https://www.ronaldlangeveld.com`,
      description: `Indie Software Developer, Ronald Langeveld, working on development projects for local and international clients.`,
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
          `gatsby-transformer-remark`,
          `gatsby-plugin-sharp`,
          `gatsby-transformer-sharp`,
    ]
  }