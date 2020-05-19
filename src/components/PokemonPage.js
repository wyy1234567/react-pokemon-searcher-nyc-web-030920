import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
const pokemonUrl = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    search: ''
  }

  componentDidMount() {
    fetch(pokemonUrl)
    .then(res => res.json())
    .then(pokemons =>  this.setState({ pokemons }))
  }

  addNewPokemonToState = (pokemon) => {
    this.setState({
      pokemons: [...this.state.pokemons, pokemon]
    })
  }

  changeSearch = (input) => {
    this.setState({
      search: input
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm newPokemon={this.addNewPokemonToState}/>
        <br />
        <Search handleInput={this.changeSearch} search={this.state.search}/>
        <br />
        <PokemonCollection pokemons={this.state.pokemons} search={this.state.search}/>
      </Container>
    )
  }
}

export default PokemonPage
