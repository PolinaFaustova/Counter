import React from 'react';

export const Controls = ({ onIncrement, onDecrement }) => {
  <div className="Counter__controls">
    <button type="button" onClick={onIncrement}>
      Збільшити на один
    </button>
    <button type="button" onClick={onDecrement}>
      Зменьшити на один
    </button>
  </div>;
};
