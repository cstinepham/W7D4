import React from 'react';
import PokemonIndexContainer from './pokemon_index_container';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  componentDidMount(){
    this.props.requestAllPokemon();
  }
  
  render(){
    return (
      <div>
        <ul>
          <li>Hello</li>
          // {this.props.pokemon.map(pokemon => (
          //   <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />))}
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;