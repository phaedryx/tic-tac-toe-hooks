import React from 'react';

export default function GameStatus(props) {
  let message = '';
  if(props.game.xWin()) { 
    message = 'X wins the game!'
  } else if(props.game.oWin()) {
    message = 'O wins the game!'
  } else if(props.game.tie()) {
    message = 'Tie game!'
  } else {
    message = `It is ${props.game.currentPlayerChar()}'s turn`
  }
  return(
    <div dangerouslySetInnerHTML={{__html: message}} />
  )
}
