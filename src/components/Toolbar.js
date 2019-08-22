import React from 'react'

function Toolbar(props){
  return(
    <div className="box-head">{props.text}
      <button onClick={props.onClick}><i className={props.icon}></i></button>
    </div>
  )
}

export default Toolbar
