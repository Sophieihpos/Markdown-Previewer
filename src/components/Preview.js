import React from 'react'

const marked = require('marked');
marked.setOptions({
  gfm: true,
  breaks: true
})

// INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
}

function Preview(props){
  return(
    <div className="box" id="preview" dangerouslySetInnerHTML={{__html: marked(props.markdown, { renderer: renderer })}} />
  )
}

export default Preview
