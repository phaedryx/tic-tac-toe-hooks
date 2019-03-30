import React  from 'react';
import GameGrid from './components/GameGrid';
import GameStatus from './components/GameStatus';
import Game from './Game';

let game = new Game();
window.game = game;

export default function App() {
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <GameGrid game={game} />
      <GameStatus game={game} />
      <button onClick={game.reset}>Reset</button>
    </>
  )
};
