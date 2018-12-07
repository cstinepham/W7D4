import { connect } from 'react-redux';
import React from 'react';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state) => ({
  pokemon: requestSinglePokemon(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestSinglePokemon: () => dispatch(requestSinglePokemon())
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
