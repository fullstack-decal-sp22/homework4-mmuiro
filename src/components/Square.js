import React from 'react';
import './styles/Square.css';

function Square({ mySymbol, myUpdater }) {
  return (
    <button className="square" onClick={(e) => myUpdater()}>
      {mySymbol}
    </button>
  );
}

export default Square;
