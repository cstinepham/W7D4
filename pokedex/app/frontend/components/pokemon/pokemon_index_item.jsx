import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    const pokemonId = this.props.pokemon.id;
    return (
      <li>
        <Link to={`/pokemon/${pokemonId}`}>
          {this.props.pokemon.name}
          <img src={this.props.pokemon.image_url}/>
        </Link>
      </li>
    );
  }
}

export default PokemonIndexItem;
