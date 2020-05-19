import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  searchResult = (search) => {
    let result = []
    result = this.props.pokemons.filter(p => p.name.includes(search))
    return result
  }

  render() {
    let filtered = this.searchResult(this.props.search)
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.search
          ? filtered.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
          : this.props.pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
        }

      </Card.Group>
    )
  }
}

export default PokemonCollection
