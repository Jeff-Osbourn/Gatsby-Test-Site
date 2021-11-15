const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
   // query content for WordPress posts
   const test = await graphql(`
  query {
    allWpPost {
      edges {
        node {
          id
          slug
          title
          content
        }
      }
    }
  }  
  `)
   /*
  const {
    data: {
      allWpPost: { nodes: allPosts },
    },
  } = await graphql(`
    query {
      allWpPost {
        nodes {
          id
          uri
      content
        }
      }
    }
  `)
  */
  const postTemplate = path.resolve(`./src/templates/post.js`)
  test.data.allPosts.edges.forEach(edge => {
    createPage({
      // will be the url for the page
    // post.uri
      //path: `/blog`,
      path: edge.node.slug,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: edge.node.id,
      },
    })
  })
}

const axios = require("axios")
const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`)

const getPokemonData = names =>
  Promise.all(
    names.map(async name => {
      const { data: pokemon } = await get(`/pokemon/${name}`)
      return { ...pokemon }
    })
  )
  
exports.createPages = async ({ actions: { createPage } }) => {
  const allPokemon = await getPokemonData(["pikachu", "charizard", "squirtle"])
  // Create a page that lists Pokémon.
  createPage({
    path: `/Pokemon`,
    component: require.resolve("./src/templates/PokemonTemp.js"),
    context: { allPokemon },
  })
}