import React, { useState }  from 'react';
import Cell from './components/Cell';

const xChar = "&#x1D5EB;";
const oChar = "&#x1D5E2;";
const eChar = "&#9642;";
const X = 1;
const O = -1;
const E = 0;

export default function App() {
  const [board, setBoard] = useState([E, E, E, E, E, E, E, E, E]);
  const [currentPlayer, setCurrentPlayer] = useState(X);

  function reset() {
    setBoard([E, E, E, E, E, E, E, E, E]) 
    setCurrentPlayer(X);
  }
  
  function togglePlayer() {
    currentPlayer === X ? setCurrentPlayer(O) : setCurrentPlayer(X)
  }

  function currentChar() {
    return currentPlayer === X ? xChar : oChar;
  }

  function charAt(pos) {
    if (board[pos] === X) return xChar;
    if (board[pos] === O) return oChar;

    return eChar;
  }

  function playAt(pos) {
    if (board[pos] === E) {
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
    if (board[0] + board[1] + board[2] === 3 * X) return true;
    if (board[3] + board[4] + board[5] === 3 * X) return true;
    if (board[6] + board[7] + board[8] === 3 * X) return true;
    // down
    if (board[0] + board[3] + board[6] === 3 * X) return true;
    if (board[1] + board[4] + board[7] === 3 * X) return true;
    if (board[2] + board[5] + board[8] === 3 * X) return true;
    //diagonal
    if (board[0] + board[4] + board[8] === 3 * X) return true;
    if (board[6] + board[4] + board[2] === 3 * X) return true;

    return false;
  }

  function oWin() {
    // across
    if (board[0] + board[1] + board[2] === 3 * O) return true;
    if (board[3] + board[4] + board[5] === 3 * O) return true;
    if (board[6] + board[7] + board[8] === 3 * O) return true;
    // down
    if (board[0] + board[3] + board[6] === 3 * O) return true;
    if (board[1] + board[4] + board[7] === 3 * O) return true;
    if (board[2] + board[5] + board[8] === 3 * O) return true;
    //diagonal
    if (board[0] + board[4] + board[8] === 3 * O) return true;
    if (board[6] + board[4] + board[2] === 3 * O) return true;

    return false;
  }

  function tie() { return board.every(val => val !== E) }

  function status() {
    let message = '';
    if (xWin()) {
      message = `${xChar} wins the game!`
    } else if (oWin()) {
      message = `${oChar} wins the game!`
    } else if (tie()) {
      message = 'Tie game!'
    } else {
      message = `It is ${currentChar()}'s turn`
    }
    return message;
  }

  const cells = board.map((_value, index) =>
    <Cell key={index} pos={index} char={ charAt(index) } playAt={ playAt } />
  )

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div id="gamegrid">{ cells }</div>
      <div id="status" dangerouslySetInnerHTML={{ __html: status() }} />
      <button onClick={reset}>Reset</button>
    </>
  )
};
