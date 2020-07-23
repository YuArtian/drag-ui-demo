import { Button } from './components'


/* 按类型选择组件 */
export const switch_component_by_type = (type) => {
  switch (type) {
    case 'button':
      return Button
    default:
      break;
  }
}