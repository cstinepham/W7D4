class PokemonIndexItem extends React.Component {
  render() {
    <li>{this.props.pokemon.name}<img src={this.props.pokemon.image_url}/></li>
  }
}

export default PokemonIndexItem;
