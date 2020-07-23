export const on_drag_start = (event, type, name) => {
  console.log('drag type', type)
  console.log('drag name', name)
  console.log('drag event', event)
  event.dataTransfer?.setData('component', JSON.stringify({type, name}));
}

export const on_drop = (event, callback) => {
  event.preventDefault();
  const { type, name } = JSON.parse(event.dataTransfer?.getData('component'));
  callback({
    type,
    name,
    position: {
      clientX: event.clientX,
      clientY: event.clientY
    }
  });
}

export const on_drag_over = event => event.preventDefault()