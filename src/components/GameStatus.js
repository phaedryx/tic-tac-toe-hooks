import React from 'react';

export default function GameStatus(props) {
  let message = '';
  if(props.xWin()) { 
    message = 'X wins the game!'
  } else if(props.oWin()) {
    message = 'O wins the game!'
  } else if(props.tie()) {
    message = 'Tie game!'
  } else {
    message = `It is ${props.currentChar()}'s turn`
  }
  return(
    <div id="status" dangerouslySetInnerHTML={{__html: message}} />
  )
}
