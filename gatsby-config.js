const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Eunice Tchitchiama',
    description: '',
    author: 'Christopher KATOYI KABA',
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'euniceportfoliov2',
        schemas: {
          home_page: require('./src/schemas/home_page.json'),
          information_page: require('./src/schemas/information_page.json'),
          project: require('./src/schemas/project.json'),
        }
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        jsxPragma: 'jsx',
        allExtensions: true,
      }
    },
    'gatsby-plugin-typescript-checker',
    'gatsby-plugin-styled-components',
    {
      resolve:'gatsby-plugin-root-import',
      options: {
        assets: path.join(__dirname, 'src/assets'),
        components: path.join(__dirname, 'src/components'),
        pageComponents: path.join(__dirname, 'src/pageComponents'),
        hooks: path.join(__dirname, 'src/hooks'),
        styles: path.join(__dirname, 'src/styles'),
        utils: path.join(__dirname, 'src/utils'),
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    }
  ],
}
