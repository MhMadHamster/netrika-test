import React, { PropTypes } from 'react';
import Button from './Button';
import Menu from './Menu';

const App = (props) => {
  const { menuVisibility, toggleMenu, arrItems } = props;
  const text = menuVisibility ? 'close' : 'open';
  return (
    <div className="app">
      <div className="mainBlock">
        <Button
          onClick={toggleMenu}
          text={text}
        />
        <ul>
          {arrItems.map(item => (
            item.active && item.text ? <li key={item.id}>{item.text}</li>
            : null
          ))}
        </ul>
      </div>
      { menuVisibility ? <Menu {...props} /> : null}
    </div>
  );
};

App.propTypes = {
  menuVisibility: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  arrItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    text: PropTypes.string,
  })).isRequired,
};

export default App;
