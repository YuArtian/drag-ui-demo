import React from "react";
import './index.less'
import { COMPONENTS_PANEL_CONFIG } from "../../../constants/index";
import { on_drag_start } from '../../../utils/drag'

class ComponentsPanel extends React.Component {
  render() {
    return (
      <div className="panel">
        {COMPONENTS_PANEL_CONFIG.map((item) => (
          <div key={item.key}>
            <h2>{item.name}</h2>
            <button className="component_item" draggable onDragStart={e => on_drag_start(e, item.type, item.name)}>按钮1</button>
          </div>
        ))}
      </div>
    );
  }
}

export default ComponentsPanel;
