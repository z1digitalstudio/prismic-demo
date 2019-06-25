module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Z1 Prismic Demo with Gatsby', // Navigation and Site Title
  titleAlt: 'Gatsby Prismic.io', // Title for JSONLD
  description: 'Based on gatsby-starter-prismic with Internationalization (i18n) support',
  headline: 'Writing and publishing content for LekoArts', // Headline for schema.org JSONLD
  url: 'https://z1-prismic-demo.lekoarts.de', // Domain of your site. No trailing slash!
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'PrismicDemo', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Z1 Digital Studio', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@z1digitalstudio', // Twitter Username
  facebook: '', // Facebook Site Name
  googleAnalyticsID: 'UA-XXXXXX-X',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
