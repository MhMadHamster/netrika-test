import * as types from '../constants/ActionTypes';

const initialState = {
  arrItems: [],
  menuVisibility: false,
};

function mainReducer(state = initialState, action) {
  let itemIndex;
  let itemObj;

  switch (action.type) {
    case types.TOGGLE_MENU:
      return {
        ...state,
        menuVisibility: !state.menuVisibility,
      };
    case types.ADD_ITEM:
      return {
        ...state,
        arrItems: [
          ...state.arrItems,
          {
            id: action.itemId,
            text: '',
            active: true,
          },
        ],
      };
    case types.CHANGE_ITEM:
      itemIndex = state.arrItems.findIndex(item =>
        item.id === action.payload.id
      );
      if (itemIndex < 0) return state;
      itemObj = state.arrItems[itemIndex];
      return {
        ...state,
        arrItems: [
          ...state.arrItems.slice(0, itemIndex),
          {
            ...itemObj,
            text: action.payload.text,
          },
          ...state.arrItems.slice(itemIndex + 1),
        ],
      };
    case types.TOGGLE_ITEM:
      itemIndex = state.arrItems.findIndex(item =>
        item.id === action.itemId
      );
      if (itemIndex < 0) return state;
      itemObj = state.arrItems[itemIndex];
      return {
        ...state,
        arrItems: [
          ...state.arrItems.slice(0, itemIndex),
          {
            ...itemObj,
            active: !itemObj.active,
          },
          ...state.arrItems.slice(itemIndex + 1),
        ],
      };
    default:
      return state;
  }
}

export default mainReducer;
