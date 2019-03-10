const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Groundline', // Navigation and Site Title
  siteTitleAlt: 'Groundline Software Solutions', // Alternative Site title for SEO
  siteTitleShort: 'Groundline', // short_name for manifest
  siteHeadline: 'We thrive when coming up with innovative ideas.', // Headline for schema.org JSONLD
  siteUrl: 'https://groundline.ph', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'An innovative digital team focused on custom-tailored web and mobile solutions.',
  author: 'Groundline.ph', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@aizer', // Twitter Username
  ogSiteName: 'groundline', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5UA-68933231-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
