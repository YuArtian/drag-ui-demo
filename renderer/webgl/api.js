import { switch_component_by_type } from './utils'

/* 添加对应类型的组件 */
export const add_component_by_type = (current_canvas, component_data) => {
  const { type, name, position } = component_data
  const new_component_class = switch_component_by_type(type)


}