module.exports = {
  siteMetadata: {
    title: `Crunchy Home Creations`,
    description: `Custom built, home made creations by a Crunchy family.™`,
    siteUrl: `https://www.crunchyhomecreations.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Crunch Home Creations`,
        short_name: `Crunch Home Creations`,
        start_url: `/`,
        background_color: `#0b3a61`,
        theme_color: `#0b3a61`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-shopify2',
      options: {
        shopName: 'crunchyhomecreations',
        accessToken: 'd0099fc9d0ddf3c1bc9d4cc8f622468a',
        verbose: true,
      },
    },
  ],
}
