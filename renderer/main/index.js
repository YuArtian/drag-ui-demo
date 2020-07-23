import React from 'react'
import ReactDOM from 'react-dom';
import './index.less'
import Menu from './views/menu'
import Canvas from './views/canvas'

const App = () => (
  <div id="main">
    <div className="left">
      <Menu />
    </div>
    <div className="middle">
      <Canvas />
    </div>
    <div className="right">R</div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))