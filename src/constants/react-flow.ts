import { Node } from 'reactflow'
import { Rectangle } from '../components'

const NODE_TYPES = {
  rectangle: Rectangle
}

const INITIALS_NODES = [
  {
    id: crypto.randomUUID(),
    type: 'rectangle',
    position: {
      x: 200,
      y: 400
    },
    data: {
      width: 200,
      height: 100
    }
  },
  {
    id: crypto.randomUUID(),
    type: 'rectangle',
    position: {
      x: 600,
      y: 400
    },
    data: {
      width: 200,
      height: 100
    }
  }
] satisfies Node[]

export { NODE_TYPES, INITIALS_NODES }