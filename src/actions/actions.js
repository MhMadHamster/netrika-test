import { v4 } from 'uuid';
import * as types from '../constants/ActionTypes';

export const toggleMenu = () => ({
  type: types.TOGGLE_MENU,
});

export const addItem = () => ({
  type: types.ADD_ITEM,
  itemId: v4(),
});

export const toggleItem = itemId => ({
  type: types.TOGGLE_ITEM,
  itemId,
});

export const changeItem = payload => ({
  type: types.CHANGE_ITEM,
  payload,
});
