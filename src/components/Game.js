import React, { useReducer, useState } from 'react';
import './styles/Game.css';
import Board from './Board';

function Game() {
  const getInitBoardState = () => {
    const initState = [];
    for (let i = 0; i < 9; i++) {
      initState.push('');
    }
    return initState;
  };
  const [boardState, setBoardState] = useState(getInitBoardState());
  const [curPlayer, setCurPlayer] = useState(0);
  const [winner, setWinner] = useState('');
  const [numMoves, setNumMoves] = useState(0);
  const symbols = ['X', 'O'];
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const updateBoard = (i) => {
    if (boardState[i] === '' && winner === '') {
      boardState[i] = symbols[curPlayer];
      setCurPlayer(curPlayer ^ 1);
      setBoardState([...boardState]);
      setNumMoves(numMoves + 1);
      checkWin();
    }
  };

  const checkWin = () => {
    for (let pattern of winningPatterns) {
      const boardValues = pattern.map((v) => boardState[v]);
      if (
        boardValues[0] !== '' &&
        boardValues.every((v) => v === boardValues[0])
      ) {
        setWinner(boardValues[0]);
        return;
      }
    }
  };

  const reset = () => {
    setBoardState(getInitBoardState());
    setWinner('');
    setCurPlayer(0);
    setNumMoves(0);
  };

  const getStatus = () => {
    if (winner !== '') {
      return `${winner} is the winner!`;
    } else if (numMoves < 9) {
      return `Next player: ${symbols[curPlayer]}`;
    } else {
      return 'Nobody won.';
    }
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board
          boardState={boardState}
          status={getStatus()}
          updater={updateBoard}
          resetter={reset}
        />
      </div>
    </div>
  );
}

export default Game;
