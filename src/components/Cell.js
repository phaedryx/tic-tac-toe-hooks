import React from 'react';

export default function Cell(props) {
  function handleClick() { props.playAt(props.pos) }

  return(
    <div
      className="cell"
      onClick={ handleClick }
      dangerouslySetInnerHTML={{ __html: props.char }}
    />
  )
}
