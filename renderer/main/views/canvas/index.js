import React from "react";
import Konva from "konva";
import { on_drop, on_drag_over } from "../../../utils/drag";
import { add_component_by_type } from '../../../webgl/api'

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.ref_canvas = React.createRef();

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
      add_component_by_type(component_data, )
    }
  };

  componentDidMount() {
    // var width = window.innerWidth;
    var width = 375;
    var height = window.innerHeight;

    var stage = new Konva.Stage({
      container: "container",
      width,
      height,
    });

    var layer = new Konva.Layer();

    var hexagon = new Konva.RegularPolygon({
      x: width / 2,
      y: height / 2,
      sides: 6,
      radius: 70,
      fill: "red",
      stroke: "black",
      strokeWidth: 4,
    });
    // create our shape
    var circle = new Konva.Circle({
      x: stage.width() / 2,
      y: stage.height() / 2,
      radius: 30,
      fill: "blue",
      stroke: "black",
      strokeWidth: 4,
    });
    var circle_1 = new Konva.Circle({
      x: stage.width() / 2,
      y: stage.height() / 2,
      radius: 30,
      fill: "blue",
      stroke: "black",
      strokeWidth: 4,
    });
    // add the shape to the layer
    layer.add(circle);
    layer.add(hexagon);
    layer.add(circle_1);

    // add the layer to the stage
    stage.add(layer);

    // save stage as a json string
    var json = stage.toJSON();

    console.log(JSON.parse(json));
  }
}

export default Canvas;
