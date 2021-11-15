import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../components/layout'
import Navbar from '../components/Navbar/Navbar'

export default function AllPokemon({ pageContext: { allPokemon } }) {
  return (
  
  <Layout pageTitle="Pokedex">
    <div>
      <h3> Behold, the Pokémon! </h3>
      <ul>
        {allPokemon.map(pokemon => (
          <li key={pokemon.id}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </li>
        ))}
      </ul>
    </div>
	</Layout>
	
  )
}