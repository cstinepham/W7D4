import { RECEIVE_ALL_POKEMON, receiveAllPokemon } from '../actions/pokemon_actions';

export const pokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};
