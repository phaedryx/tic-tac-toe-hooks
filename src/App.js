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

  function charFor(value) {
    if (value === X) return xChar;
    if (value === O) return oChar;

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
  function hasWon(player) {
    // across
    if (board[0] + board[1] + board[2] === 3 * player) return true;
    if (board[3] + board[4] + board[5] === 3 * player) return true;
    if (board[6] + board[7] + board[8] === 3 * player) return true;
    // down
    if (board[0] + board[3] + board[6] === 3 * player) return true;
    if (board[1] + board[4] + board[7] === 3 * player) return true;
    if (board[2] + board[5] + board[8] === 3 * player) return true;
    //diagonal
    if (board[0] + board[4] + board[8] === 3 * player) return true;
    if (board[6] + board[4] + board[2] === 3 * player) return true;

    return false;
  }

  function tie() { return board.every(val => val !== E) }

  function status() {
    let message = '';
    if (hasWon(X)) {
      message = `${xChar} wins the game!`
    } else if (hasWon(O)) {
      message = `${oChar} wins the game!`
    } else if (tie()) {
      message = 'Tie game!'
    } else {
      message = `It is ${charFor(currentPlayer)}'s turn`
    }
    return message;
  }

  const cells = board.map((val, index) =>
    <Cell key={index} pos={index} char={ charFor(val) } playAt={ playAt } />
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
