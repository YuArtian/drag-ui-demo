import Konva from "konva";
let id = 0;

/* WebGL2D 组件基类 */
class WebGL2DComponent {
  constructor({ position, type, parent, children, styles }) {
    this.id = id++;
    this.parent = parent || null;
    this.children = children || null;
    this.type = type || "webgl2dcomponent";
    this.name = name || "webgl2dcomponent";
    this.position = position || { x: 0, y: 0 };
    this.styles = styles || {};

    this.group = new Konva.Group({
      draggable: true,
      name: `${name}_group`,
      ...position,
    });

    this.transformer = new Konva.Transformer({
      node: this.group,
      rotateEnabled: false,
      id: `${name}_transformer_${id}`,
    });
  }
  /* 添加到 画布 Layer */
  append_to_layer(layer) {
    layer.add();
  }
}

export default WebGL2DComponent;
