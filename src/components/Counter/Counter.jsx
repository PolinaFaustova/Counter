import React from 'react';
import './Counter.css';
// import { Controls } from './Controls';

export class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>

        <div className="Counter__controls">
    <button type="button" onClick={this.handleIncrement}>
      Збільшити на один
    </button>
    <button type="button" onClick={this.handleDecrement}>
      Зменьшити на один
    </button>
  </div>
      </div>
    );
  }
}
