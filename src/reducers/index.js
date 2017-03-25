import * as types from '../constants/ActionTypes';

const initialState = {
  arrItems: [],
  menuVisibility: false,
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_MENU:
      return {
        ...state,
        menuVisibility: !state.menuVisibility,
      };
    default:
      return state;
  }
}

export default mainReducer;
