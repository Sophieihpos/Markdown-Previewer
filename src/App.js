import React from 'react'
import './App.css';
import Toolbar from './components/Toolbar'
import Editor from './components/Editor'
import Preview from './components/Preview'
import placeholder from './Placeholder'

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

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      markdown: placeholder,
      editorMaximised: false,
      previewMaximised: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleEditorMaximise = this.handleEditorMaximise.bind(this);
    this.handlePreviewMaximise = this.handlePreviewMaximise.bind(this);
  }

handleChange(event){
  const {name, value} = event.target;
  this.setState({
    [name]: value
  })
}

handleEditorMaximise(){
  this.setState({
    editorMaximised: !this.state.editorMaximised
  })
}

handlePreviewMaximise(){
  this.setState({
    previewMaximised: !this.state.previewMaximised
  })
}

  render() {
    const classes = this.state.editorMaximised ? ['maximised', 'hide', 'fas fa-compress-arrows-alt expandButton'] : this.state.previewMaximised ? ['hide', 'maximised', 'fas fa-compress-arrows-alt expandButton'] : ['containers', 'containers', 'fas fa-expand-arrows-alt expandButton'];
    return (
      <div id="container">
        <div id="editor-container" className={classes[0]}>
          <Toolbar text="Editor" onClick={this.handleEditorMaximise} icon={classes[2]}/>
          <Editor onChange={this.handleChange} value={this.state.markdown}/>
        </div>
        <div id="preview-container" className={classes[1]}>
          <Toolbar text="Preview" onClick={this.handlePreviewMaximise} icon={classes[2]}/>
          <Preview markdown={this.state.markdown}/>
        </div>
      </div>
    )
  }
}

export default App;
