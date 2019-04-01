import React from 'react';

export default function Cell(props) {
  return(
    <div
      className="cell"
      onClick={ props.play }
      dangerouslySetInnerHTML={{ __html: props.char }}
    />
  )
}
