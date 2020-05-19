import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    isFront: true
  }

  toggleFront = () => {
    this.setState({
      isFront: !this.state.isFront
    })
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            {this.state.isFront
            ? <img src={this.props.pokemon.sprites.front} alt={this.props.pokemon.name} onClick={this.toggleFront}/>
            : <img src={this.props.pokemon.sprites.back} alt={this.props.pokemon.name} onClick={this.toggleFront}/>
            }
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(s => s.name === 'hp').value }
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
