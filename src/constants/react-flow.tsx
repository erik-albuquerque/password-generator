import { Node } from 'reactflow'
import { Rectangle, DefaultEdge, Button } from '../components'
import { IoCopy } from 'react-icons/io5'

const NODE_TYPES = {
  rectangle: Rectangle,
  button: Button
}

const INITIALS_NODES = [
  {
    id: crypto.randomUUID(),
    type: 'rectangle',
    position: {
      x: 450,
      y: 300
    },
    data: {
      width: 200,
      height: 100,
      dots: [
        {
          id: crypto.randomUUID(),
          type: 'source',
          position: 'Bottom',
          left: 20
        },
        {
          id: crypto.randomUUID(),
          type: 'source',
          position: 'Left',
          top: 20
        },
        {
          id: crypto.randomUUID(),
          type: 'source',
          position: 'Right',
          top: 60
        }
      ]
    }
  },
  {
    id: crypto.randomUUID(),
    type: 'rectangle',
    position: {
      x: 450,
      y: 500
    },
    data: {
      width: 281,
      height: 143,
      dots: [
        {
          id: crypto.randomUUID(),
          type: 'source',
          position: 'Top',
          left: 200
        },
        {
          id: crypto.randomUUID(),
          type: 'source',
          position: 'Bottom',
          left: 60
        },
        {
          id: crypto.randomUUID(),
          type: 'source',
          position: 'Right'
        }
      ]
    }
  },
  {
    id: crypto.randomUUID(),
    type: 'button',
    position: {
      x: 700,
      y: 334
    },
    data: {
      className: 'bg-purple-500 hover:bg-purple-500/90',
      children: <span>Generate</span>,
      dots: [
        {
          id: crypto.randomUUID(),
          type: 'target',
          position: 'Left'
        },
        {
          id: crypto.randomUUID(),
          type: 'target',
          position: 'Bottom'
        }
      ]
    }
  },
  {
    id: crypto.randomUUID(),
    type: 'button',
    position: {
      x: 300,
      y: 354
    },
    data: {
      className: 'bg-purple-500 hover:bg-purple-500/90',
      children: <span>Random</span>,
      dots: [
        {
          id: crypto.randomUUID(),
          type: 'target',
          position: 'Top'
        }
      ]
    }
  },
  {
    id: crypto.randomUUID(),
    type: 'button',
    position: {
      x: 463,
      y: 670
    },
    data: {
      className: 'bg-gray-700 hover:bg-gray-700/80',
      action: () => console.log('copy!!!'),
      children: (
        <>
          <IoCopy size={18} />
          <span>Copy</span>
        </>
      ),
      dots: [
        {
          id: crypto.randomUUID(),
          type: 'target',
          position: 'Top'
        }
      ]
    }
  }
] satisfies Node[]

const EDGE_TYPES = {
  default: DefaultEdge
}

export { NODE_TYPES, EDGE_TYPES, INITIALS_NODES }
