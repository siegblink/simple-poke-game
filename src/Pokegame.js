import React, { Component } from 'react'
import Pokedex from './Pokedex'
import './Pokegame.css'

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
      { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
      { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
      { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
      { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
      { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
      { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
    ],
  }

  render() {
    let firstHand = []
    let secondHand = [...this.props.pokemon]

    // Reshuffle the items from the
    // secondHand array.
    while (firstHand.length < secondHand.length) {
      // Generate a random number
      // based on the length of secondHand array.
      let randomIndex = Math.floor(Math.random() * secondHand.length)

      // Remove one item from the secondHand array
      // randomly.
      let randomPokemon = secondHand.splice(randomIndex, 1)

      // Insert the removed item into the
      // firstHand array.
      firstHand.push(...randomPokemon)
    }

    let firstExp = firstHand.reduce(function (exp, pokemon) {
      return exp + pokemon.base_experience
    }, 0)
    let secondExp = secondHand.reduce(function (exp, pokemon) {
      return exp + pokemon.base_experience
    }, 0)

    return (
      <div className='pokegame'>
        <Pokedex
          pokemon={firstHand}
          exp={firstExp}
          isWinner={firstExp > secondExp}
        />
        <Pokedex
          pokemon={secondHand}
          exp={secondExp}
          isWinner={secondExp > firstExp}
        />
      </div>
    )
  }
}

export default Pokegame
