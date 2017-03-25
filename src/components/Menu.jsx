import React, { PropTypes } from 'react';
import Button from './Button';
import MenuItem from './MenuItem';

const Menu = props => (
  <div className="menu">
    <ul className="menuList">
      {props.arrItems.map((item, i) => (
        <MenuItem
          key={item.id}
          {...item}
          toggleItem={props.toggleItem}
          changeItem={props.changeItem}
          index={i + 1}
        />
        ))}
    </ul>

    <Button
      onClick={props.addItem}
      text={'Add item'}
    />
  </div>
);

Menu.propTypes = {
  arrItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    text: PropTypes.string,
  })).isRequired,
  addItem: PropTypes.func.isRequired,
  toggleItem: PropTypes.func.isRequired,
  changeItem: PropTypes.func.isRequired,
};

export default Menu;
