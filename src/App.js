import React, { useState }  from 'react';
import Cell from './components/Cell';
import GameStatus from './components/GameStatus';

const xChar = "&#x1D5EB;";
const oChar = "&#x1D5E2;";
const emptyChar = "&#9642;";

export default function App() {
  const [board, setBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  function reset() {
    setBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]) 
    setCurrentPlayer(1);
  }
  
  function togglePlayer() {
    currentPlayer === 1 ? setCurrentPlayer(-1) : setCurrentPlayer(1)
  }

  function currentChar() {
    return currentPlayer === 1 ? xChar : oChar;
  }

  function charAt(pos) {
    if (board[pos] === 1) return xChar;
    if (board[pos] === -1) return oChar;

    return emptyChar;
  }

  function playAt(pos) {
    if(board[pos] === 0) {
      board[pos] = currentPlayer;
      setBoard(board);
      togglePlayer();
    }
  }

  // 0 1 2
  // 3 4 5
  // 6 7 8
  function xWin() {
    // across
    if(board[0] + board[1] + board[2] === 3) return true;
    if(board[3] + board[4] + board[5] === 3) return true;
    if(board[6] + board[7] + board[8] === 3) return true;
    // down
    if(board[0] + board[3] + board[6] === 3) return true;
    if(board[1] + board[4] + board[7] === 3) return true;
    if(board[2] + board[5] + board[8] === 3) return true;
    //diagonal
    if(board[0] + board[4] + board[8] === 3) return true;
    if(board[6] + board[4] + board[2] === 3) return true;

    return false;
  }

  function oWin() {
    // across
    if (board[0] + board[1] + board[2] === -3) return true;
    if (board[3] + board[4] + board[5] === -3) return true;
    if (board[6] + board[7] + board[8] === -3) return true;
    // down
    if (board[0] + board[3] + board[6] === -3) return true;
    if (board[1] + board[4] + board[7] === -3) return true;
    if (board[2] + board[5] + board[8] === -3) return true;
    //diagonal
    if (board[0] + board[4] + board[8] === -3) return true;
    if (board[6] + board[4] + board[2] === -3) return true;

    return false;
  }

  function tie() { return board.every(val => val !== 0) }

  const cells = board.map((_value, index) =>
    <Cell key={index} pos={index} char={ charAt(index) } playAt={ playAt } />
  )
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div id="gamegrid">{ cells }</div>
      <GameStatus xWin={xWin} oWin={oWin} tie={tie} currentChar={currentChar} />
      <button onClick={reset}>Reset</button>
    </>
  )
};
