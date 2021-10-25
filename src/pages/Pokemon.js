import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const PokemonPage = ({ data }) => {
  return (
    <Layout pageTitle="Pokemon">
		<div>
			Hello!
		</div>
    </Layout>
  )
}

export default PokemonPage