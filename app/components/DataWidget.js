import React, { PropTypes } from 'react';

const DataWidget = (props) => {
  let universalName = 'shahzad'

  return (
    <div style={{background: props.backgroundColor}}>
      <h2>{props.name}</h2>
      <p>{props.data}</p>
    </div>
  )
}




export default DataWidget;
