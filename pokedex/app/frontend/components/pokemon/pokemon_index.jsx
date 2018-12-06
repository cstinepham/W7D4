import React from 'react';
import PokemonIndexContainer from './pokemon_index_container';

class PokemonIndex extends React.Component {
  componentDidMount(){
    this.props.requestAllPokemon();
  }
  
  render(){
    return (
      <div>
        <ul>
          {this.props.pokemon.map(pokemon => (
            <li>{pokemon.name}<img src={pokemon.image_url}/></li>))}
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;