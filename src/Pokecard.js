import React, { Component } from 'react'
import './Pokecard.css'

// Pokemon URL that renders low quality image -- for now this not needed.
// const POKE_API =
//   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

// Pokemon URL that renders high quality image.
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

// Declare padToThree helper function.
function padToThree(number) {
  return number <= 999 ? `00${number}`.slice(-3) : number
}

class Pokecard extends Component {
  render() {
    let imageSource = `${POKE_API}00${this.props.id}.png`

    return (
      <div className='pokecard'>
        <img src={imageSource} alt={this.props.name} />
        <div>
          <h1>{this.props.name}</h1>
          <p>Type: {padToThree(this.props.type)}</p>
          <p>Exp: {this.props.exp}</p>
        </div>
      </div>
    )
  }
}

export default Pokecard
