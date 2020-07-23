import Konva from 'konva'
import WebGL2DComponent from './WebGL2DComponent'

const CANVAS_TYPE = {
  'IP6': {
    CANVAS_WIDTH: 375,
    CANVAS_HEIGHT: 667,
  }
}

class WebGL2DCanvas {
  constructor(container, type='IP6'){
    this.stage = new Konva.Stage({
      container: container.id,
      width: CANVAS_TYPE[type].CANVAS_WIDTH,
      height: CANVAS_TYPE[type].CANVAS_HEIGHT
    })
    this.layer = new Konva.Layer();
    this.stage.add(this.layer);
  }
  /* 增加组件 */
  add_component(component){

  }
}

export default WebGL2DCanvas