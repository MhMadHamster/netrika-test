import React, { Component } from 'react';
import Button from './Button';
import Menu from './Menu';

class App extends Component {
  render() {
    const { menuVisibility, toggleMenu, arrItems } = this.props;
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
              item.active ? item.text : null
            ))}
          </ul>
        </div>
        { menuVisibility ? <Menu {...this.props} /> : null}
      </div>
    );
  }
}

export default App;
