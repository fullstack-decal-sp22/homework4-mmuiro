import React from 'react';
import './styles/Board.css';
import Square from './Square';

function Board({ boardState, status, updater, resetter }) {
  function renderSquare(i) {
    return <Square mySymbol={boardState[i]} myUpdater={() => updater(i)} />;
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className="status">{status}</div>
      <button className="reset" onClick={() => resetter()}>
        Reset
      </button>
    </div>
  );
}

export default Board;
