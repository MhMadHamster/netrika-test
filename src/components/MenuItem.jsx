import React, { Component } from 'react';
import Button from './Button';

class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.text,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
    this.props.changeItem({
      text: event.target.value,
      id: this.props.id,
    });
  }

  render() {
    const { index, toggleItem, active, id } = this.props;
    const buttonText = active ? 'Remove' : 'Restore';
    const itemClassName = !active ? 'blocked' : '';

    return (
      <div className={`menuItem ${itemClassName}`}>
        Item #{index}
        <textarea onChange={this.handleChange} value={this.state.value}></textarea>
        <Button
          onClick={() => toggleItem(id)}
          text={buttonText}
        />
      </div>
    )
  }
};

export default MenuItem;
