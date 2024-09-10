/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config()

module.exports = {
    siteMetadata: {
        title: `new-portfolio`,
        siteUrl: `https://www.yourdomain.tld`
    },
    flags: {
        DEV_SSR: true
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                "accessToken": process.env.access_token,
                "spaceId": process.env.space_id
            }
        },
        // `gatsby-plugin-layout`,
        "gatsby-plugin-sharp",
        "gatsby-plugin-postcss",
        "gatsby-plugin-image",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sass",
        "gatsby-plugin-sitemap",
        "gatsby-transformer-remark",
        `gatsby-transformer-json`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        }]
};