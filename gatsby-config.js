module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"axios",
		"gatsby-plugin-styled-components",
		"gatsby-plugin-dark-mode",
		{
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
        	{
        		resolve: `gatsby-remark-images`,
        		options: {
        			maxWidth: 1200,
        		},
        	},
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
        	`roboto mono`,
        	`muli\: 400, 400i, 700, 700i`,
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
	{
		resolve: "gatsby-source-wordpress",
		options: {
			url: `https://csc496wordpress.tldr.dev/graphql`,
			schema: {
				typePrefix: `Wp`,
			},
			protocol: `https`,
			hostingWPCOM: false,
			useACF: false
		},
	},
	
  ],
};
