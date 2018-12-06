export const thunk = ({dispatch}) => (next) => (action) => {
  if (typeof action === 'function') {
    // ACTION
    // (dispatch) => (
    //   APIUtil.fetchAllPokemon()
    //     .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
    // );
    return action(dispatch); // where the ajax request happens
  } else {
    return next(action);
  }
};
