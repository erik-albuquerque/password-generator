import { Node, Edge } from 'reactflow'
import { Rectangle, DefaultEdge, Button, Label } from '../components'
import { IoCopy } from 'react-icons/io5'

const NODE_TYPES = {
  rectangle: Rectangle,
  button: Button,
  label: Label
}

const INITIALS_NODES = [
  {
    id: crypto.randomUUID(),
    type: 'rectangle',
    position: {
      x: 571,
      y: 240
    },
    data: {
      width: 200,
      height: 103,
      dots: [
        {
          id: crypto.randomUUID(),
          type: 'source',
          position: 'Left',
          top: 21
        },
        {
          id: crypto.randomUUID(),
          type: 'source',
          position: 'Bottom',
          left: 20
        },
        {
          id: crypto.randomUUID(),
          type: 'source',
          position: 'Right',
          top: 63
        }
      ]
    }
  },
  {
    id: crypto.randomUUID(),
    type: 'rectangle',
    position: {
      x: 570,
      y: 422
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
          left: 84
        },
        {
          id: crypto.randomUUID(),
          type: 'source',
          position: 'Right',
          top: 73
        }
      ]
    }
  },
  {
    id: crypto.randomUUID(),
    type: 'button',
    position: {
      x: 817,
      y: 279
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
      x: 443,
      y: 292
    },
    data: {
      className: 'bg-purple-500 hover:bg-purple-500/90',
      children: <span>Random</span>,
      dots: [
        {
          id: crypto.randomUUID(),
          type: 'source',
          position: 'Top'
        }
      ]
    }
  },
  {
    id: crypto.randomUUID(),
    type: 'button',
    position: {
      x: 608,
      y: 595
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
  },
  {
    id: crypto.randomUUID(),
    type: 'label',
    position: {
      x: 548,
      y: 365
    },
    data: {
      children: <span>Length</span>,
      dots: [
        {
          id: crypto.randomUUID(),
          type: 'source',
          position: 'Top'
        },
        {
          id: crypto.randomUUID(),
          type: 'source',
          position: 'Left'
        }
      ]
    }
  },
  {
    id: crypto.randomUUID(),
    type: 'label',
    position: {
      x: 493,
      y: 432
    },
    data: {
      className: '!py-3 !px-2',
      children: (
        <input
          type='number'
          defaultValue={20}
          min={1}
          max={99}
          className='bg-transparent border-none font-medium outline-none max-w-[35px] text-center'
        />
      ),
      dots: [
        {
          id: crypto.randomUUID(),
          type: 'source',
          position: 'Top'
        }
      ]
    }
  },
  {
    id: crypto.randomUUID(),
    type: 'label',
    position: {
      x: 897,
      y: 470
    },
    data: {
      children: <span>Strength</span>,
      dots: [
        {
          id: crypto.randomUUID(),
          type: 'source',
          position: 'Bottom'
        },
        {
          id: crypto.randomUUID(),
          type: 'target',
          position: 'Left'
        }
      ]
    }
  },
  {
    id: crypto.randomUUID(),
    type: 'label',
    position: {
      x: 924,
      y: 548
    },
    data: {
      children: <span>💪</span>,
      className: '!py-1 !px-3',
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

const INITIALS_EDGES = [
  {
    id: crypto.randomUUID(),
    source: INITIALS_NODES[0].id,
    target: INITIALS_NODES[3].id,
    sourceHandle: INITIALS_NODES[0].data.dots[0].id,
    targetHandle: 'top'
  },
  {
    id: crypto.randomUUID(),
    source: INITIALS_NODES[0].id,
    target: INITIALS_NODES[5].id,
    sourceHandle: INITIALS_NODES[0].data.dots[1].id,
    targetHandle: 'top'
  },
  {
    id: crypto.randomUUID(),
    source: INITIALS_NODES[0].id,
    target: INITIALS_NODES[2].id,
    sourceHandle: INITIALS_NODES[0].data.dots[2].id,
    targetHandle: 'left'
  },
  {
    id: crypto.randomUUID(),
    source: INITIALS_NODES[1].id,
    target: INITIALS_NODES[2].id,
    sourceHandle: INITIALS_NODES[1].data.dots[0].id,
    targetHandle: 'bottom'
  },
  {
    id: crypto.randomUUID(),
    source: INITIALS_NODES[1].id,
    target: INITIALS_NODES[4].id,
    sourceHandle: INITIALS_NODES[1].data.dots[1].id
  },
  {
    id: crypto.randomUUID(),
    source: INITIALS_NODES[1].id,
    target: INITIALS_NODES[7].id,
    sourceHandle: INITIALS_NODES[1].data.dots[2].id,
    targetHandle: 'left'
  },
  {
    id: crypto.randomUUID(),
    source: INITIALS_NODES[5].id,
    target: INITIALS_NODES[6].id,
    sourceHandle: 'left'
  },
  {
    id: crypto.randomUUID(),
    source: INITIALS_NODES[7].id,
    target: INITIALS_NODES[8].id,
    sourceHandle: INITIALS_NODES[7].data.dots[1].id
  }
] satisfies Edge[]

const EDGE_TYPES = {
  default: DefaultEdge
}

export { NODE_TYPES, EDGE_TYPES, INITIALS_NODES, INITIALS_EDGES }
