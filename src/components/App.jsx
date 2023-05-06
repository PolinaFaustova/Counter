import React from 'react';
import { Counter } from './Counter/Counter';

// const colorPickerOptions = [
//   { label: 'Red', color: '#FF0000' },
//   { label: 'Green', color: '#00FF00' },
//   { label: 'Blue', color: '#0000FF' },
//   { label: 'Yellow', color: '#FFFF00' },
//   { label: 'Purple', color: '#800080' },
//   { label: 'Orange', color: '#FFA500' },
//   { label: 'Pink', color: '#FFC0CB' },
//   { label: 'Brown', color: '#A52A2A' },
// ];

export const App = () => {
  return (
    <>
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        Стан компоненту
      </h1>

      <Counter initialValue={0} />
    </>
  );
};
