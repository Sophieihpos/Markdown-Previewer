import React from 'react'

function Editor(props){
  return(
    <textarea id="editor" className="box" onChange={props.handleChange} name="markdown" value={props.value}></textarea>
  )
}

export default Editor
