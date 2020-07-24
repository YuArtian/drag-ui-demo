import { switch_component_by_type } from './utils'

/* 添加对应类型的组件 */
export const add_component_by_type = (current_canvas, component_data) => {
  const { type } = component_data
  const New_Component_Class = switch_component_by_type(type)
  const component = new New_Component_Class(component_data)
  current_canvas.add_component(component)
}