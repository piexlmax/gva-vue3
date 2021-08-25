
// using ES6 modules
import mitt from 'mitt'

export const emitterBox = {
  emitter: null
}

export const install = (app) => {
  const emitter = mitt()
  emitterBox.emitter = emitter
  app.config.globalProperties.$bus = emitter
}

