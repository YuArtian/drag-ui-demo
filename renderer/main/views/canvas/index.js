import React from "react";
import Konva from "konva";
import { on_drop, on_drag_over } from "../../../utils/drag";
import { add_component_by_type } from '../../../webgl/api'
import WebGL2DCanvas from '../../../webgl/components/WebGL2DCanvas'
import './index.less'

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.ref_canvas = React.createRef();
    this.canvas = null
  }

  render() {
    return (
      <div
        id="container"
        ref={this.ref_canvas}
        onDrop={(e) => on_drop(e, this.handle_drop)}
        onDragOver={on_drag_over}
      ></div>
    );
  }
  /* 拖拽到 canvas */
  handle_drop = (data) => {
    if (data) {
      const { type, name, position } = data;
      const view = this.ref_canvas.current;
      const x = position.clientX - view.offsetLeft;
      const y = position.clientY - view.offsetTop;
      console.log("x", x);
      console.log("y", y);
      //添加对应的组件到 canvas
      const component_data = {type, name, position: {x, y}}
      this.canvas && add_component_by_type(this.canvas, component_data)
    }
  };

  componentDidMount() {
    const canvas = new WebGL2DCanvas(this.ref_canvas.current)
    this.canvas = canvas
  }
}

export default Canvas;
