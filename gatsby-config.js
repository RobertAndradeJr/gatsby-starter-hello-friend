const postCssPresetEnv = require(`postcss-preset-env`)
const postCSSNested = require('postcss-nested')

module.exports = {
  siteMetadata: {
    title: `Hello Friend`,
    description: `A simple starter for Gatsby. That's it.`,
    copyrights: '',
    author: `@panr`,
    logo: {
      src: '',
      alt: '',
    },
    logoText: 'hello friend',
    defaultTheme: 'dark',
    postsPerPage: 2,
    mainMenu: [
      {
        title: 'About',
        path: '/about',
      },
      {
        title: 'Showcase',
        path: '/showcase',
      },
      {
        title: 'Hello Friend',
        path: '/hi',
      },
    ],
    showMenuItems: 2,
    menuMoreText: 'Menu',
  },
  plugins: [
    `babel-preset-gatsby`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [postCssPresetEnv({ stage: 1 }), postCSSNested()],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              related: false,
              noIframeBorder: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 100,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-hello-friend`,
        short_name: `hello-friend`,
        start_url: `/`,
        background_color: `#292a2d`,
        theme_color: `#292a2d`,
        display: `minimal-ui`,
        icon: `src/images/hello-icon.png`,
      },
    },
  ],
}
