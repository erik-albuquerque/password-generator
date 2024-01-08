import { Edge } from 'reactflow'

import {
  Addons,
  Button,
  CopyToClipboard,
  DefaultEdge,
  GeneratePasswordButton,
  InputPasswordLength,
  Label,
  Logo,
  PasswordStrengthEmoji,
  PasswordText,
  RandomAddonsButton,
  Rectangle,
  SimpleBezierEdge
} from '../components'
import { NodeCustomProps } from '../types'

const NODE_TYPES = {
  rectangle: Rectangle,
  button: Button,
  label: Label,
  logo: Logo
}

const EDGE_TYPES = {
  default: DefaultEdge,
  simpleBezier: SimpleBezierEdge
}

const useFlow = () => {
  // TODO: fix logo on top when move flow
  const logoNodes = [
    {
      id: 'logo-node-1',
      type: 'logo',
      position: {
        x: 32,
        y: 32
      },
      data: {
        className: '',
        children: (
          <div className='top-8'>
            <svg
              width='38'
              height='38'
              viewBox='0 0 38 38'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M19 1.58334L32.0102 4.47451C32.3618 4.55267 32.6763 4.74837 32.9017 5.02932C33.1271 5.31026 33.2499 5.65966 33.25 6.01984V21.8326C33.2499 23.3965 32.8637 24.9362 32.1257 26.315C31.3876 27.6938 30.3206 28.8691 29.0193 29.7366L19 36.4167L8.98067 29.7366C7.6796 28.8693 6.61273 27.6942 5.87472 26.3157C5.13671 24.9372 4.75037 23.3978 4.75 21.8342V6.01984C4.75006 5.65966 4.87293 5.31026 5.09832 5.02932C5.32371 4.74837 5.63815 4.55267 5.98975 4.47451L19 1.58334ZM19 11.0833C18.3029 11.0834 17.6254 11.3134 17.0723 11.7378C16.5193 12.1621 16.1218 12.7571 15.9414 13.4304C15.761 14.1037 15.8078 14.8177 16.0745 15.4618C16.3412 16.1058 16.813 16.6438 17.4167 16.9923V23.75H20.5833L20.5849 16.9923C21.1887 16.6437 21.6605 16.1056 21.9272 15.4614C22.194 14.8172 22.2406 14.103 22.06 13.4296C21.8794 12.7562 21.4816 12.1613 20.9283 11.737C20.375 11.3128 19.6972 11.083 19 11.0833Z'
                fill='#8257E6'
              />
            </svg>
          </div>
        ),
        dots: [
          {
            id: 'logo-edge-0',
            type: 'source',
            position: 'Right',
            right: -3,
            top: 18
          }
        ]
      }
    },
    {
      id: 'logo-node-2',
      type: 'label',
      position: {
        x: 91,
        y: 25.4
      },
      data: {
        children: <span>Create</span>,
        dots: [
          {
            id: 'logo-edge-0',
            type: 'source',
            position: 'Left'
          },
          {
            id: 'logo-edge-1',
            type: 'source',
            position: 'Bottom',
            left: 1,
            top: 37
          }
        ]
      }
    },
    {
      id: 'logo-node-3',
      type: 'label',
      position: {
        x: 71,
        y: 75
      },
      data: {
        children: <span>a</span>,
        dots: [
          {
            id: 'logo-edge-0',
            type: 'target',
            position: 'Top',
            left: 10,
            top: -5
          },
          {
            id: 'logo-edge-1',
            type: 'source',
            position: 'Right'
          }
        ]
      }
    },
    {
      id: 'logo-node-4',
      type: 'label',
      position: {
        x: 133,
        y: 86
      },
      data: {
        children: <span>Solid</span>,
        dots: [
          {
            id: 'logo-edge-0',
            type: 'target',
            position: 'Left',
            top: 14,
            left: -6
          },
          {
            id: 'logo-edge-1',
            type: 'source',
            position: 'Top',
            left: 44
          }
        ]
      }
    },
    {
      id: 'logo-node-5',
      type: 'label',
      position: {
        x: 189,
        y: 40
      },
      data: {
        children: <span>Password</span>,
        dots: [
          {
            id: 'logo-edge-0',
            type: 'target',
            position: 'Left',
            top: 28,
            left: -8
          }
        ]
      }
    }
  ] satisfies NodeCustomProps[]

  const logoEdges = [
    {
      id: crypto.randomUUID(),
      source: logoNodes[0].id,
      target: logoNodes[1].id,
      type: 'simpleBezier'
    },
    {
      id: crypto.randomUUID(),
      source: logoNodes[1].id,
      target: logoNodes[2].id,
      sourceHandle: 'bottom',
      targetHandle: 'top',
      type: 'simpleBezier'
    },
    {
      id: crypto.randomUUID(),
      source: logoNodes[2].id,
      target: logoNodes[3].id,
      sourceHandle: logoNodes[2].data.dots[1].id,
      targetHandle: 'left',
      type: 'simpleBezier'
    },
    {
      id: crypto.randomUUID(),
      source: logoNodes[3].id,
      target: logoNodes[4].id,
      sourceHandle: logoNodes[3].data.dots[1].id,
      targetHandle: 'left',
      type: 'simpleBezier'
    }
  ] satisfies Edge[]

  const mainNodes = [
    {
      id: 'node-0',
      type: 'rectangle',
      position: {
        x: 571,
        y: 240
      },
      data: {
        width: 244,
        height: 103,
        title: 'Addons',
        headerStyle: 'mt-2',
        children: <Addons />,
        dots: [
          {
            id: 'edge-0',
            type: 'source',
            position: 'Left',
            top: 21
          },
          {
            id: 'edge-1',
            type: 'source',
            position: 'Bottom',
            left: 20
          },
          {
            id: 'edge-2',
            type: 'source',
            position: 'Right',
            top: 63
          }
        ]
      }
    },
    {
      id: 'node-1',
      type: 'rectangle',
      position: {
        x: 610,
        y: 422
      },
      data: {
        width: 281,
        height: 143,
        title: 'Password',
        headerStyle: 'mt-2',
        className: 'items-center',
        children: <PasswordText />,
        dots: [
          {
            id: 'edge-0',
            type: 'source',
            position: 'Top',
            left: 200
          },
          {
            id: 'edge-1',
            type: 'source',
            position: 'Bottom',
            left: 84
          },
          {
            id: 'edge-2',
            type: 'source',
            position: 'Right',
            top: 73
          }
        ]
      }
    },
    {
      id: 'node-2',
      type: 'button',
      position: {
        x: 861,
        y: 279
      },
      data: {
        className: 'bg-purple-500 hover:bg-purple-500/90',
        children: <GeneratePasswordButton />,
        dots: [
          {
            id: 'edge-0',
            type: 'target',
            position: 'Left'
          },
          {
            id: 'edge-1',
            type: 'target',
            position: 'Bottom'
          }
        ]
      }
    },
    {
      id: 'node-3',
      type: 'button',
      position: {
        x: 443,
        y: 292
      },
      data: {
        className: 'bg-purple-500 hover:bg-purple-500/90',
        children: <RandomAddonsButton />,
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
      id: 'node-4',
      type: 'button',
      position: {
        x: 650,
        y: 595
      },
      data: {
        children: <CopyToClipboard />,
        dots: [
          {
            id: 'edge-0',
            type: 'target',
            position: 'Top'
          }
        ]
      }
    },
    {
      id: 'node-5',
      type: 'label',
      position: {
        x: 550,
        y: 365
      },
      data: {
        children: <span>Length</span>,
        dots: [
          {
            id: 'edge-0',
            type: 'source',
            position: 'Top'
          },
          {
            id: 'edge-1',
            type: 'source',
            position: 'Left'
          }
        ]
      }
    },
    {
      id: 'node-6',
      type: 'label',
      position: {
        x: 493,
        y: 432
      },
      data: {
        className: '!py-3 !px-2',
        children: <InputPasswordLength min={1} max={100} />,
        dots: [
          {
            id: 'edge-0',
            type: 'source',
            position: 'Top'
          }
        ]
      }
    },
    {
      id: 'node-7',
      type: 'label',
      position: {
        x: 941,
        y: 470.2
      },
      data: {
        children: <span>Strength</span>,
        dots: [
          {
            id: 'edge-0',
            type: 'source',
            position: 'Bottom'
          },
          {
            id: 'edge-1',
            type: 'target',
            position: 'Left'
          }
        ]
      }
    },
    {
      id: 'node-8',
      type: 'label',
      position: {
        x: 965,
        y: 548
      },
      data: {
        children: <PasswordStrengthEmoji />,
        className: '!py-1 !px-3',
        dots: [
          {
            id: 'edge-0',
            type: 'target',
            position: 'Top'
          }
        ]
      }
    }
  ] satisfies NodeCustomProps[]

  const mainEdges = [
    {
      id: crypto.randomUUID(),
      source: mainNodes[0].id,
      target: mainNodes[3].id,
      sourceHandle: mainNodes[0].data.dots[0].id,
      targetHandle: 'top'
    },
    {
      id: crypto.randomUUID(),
      source: mainNodes[0].id,
      target: mainNodes[5].id,
      sourceHandle: mainNodes[0].data.dots[1].id,
      targetHandle: 'top'
    },
    {
      id: crypto.randomUUID(),
      source: mainNodes[0].id,
      target: mainNodes[2].id,
      sourceHandle: mainNodes[0].data.dots[2].id,
      targetHandle: 'left'
    },
    {
      id: crypto.randomUUID(),
      source: mainNodes[1].id,
      target: mainNodes[2].id,
      sourceHandle: mainNodes[1].data.dots[0].id,
      targetHandle: 'bottom'
    },
    {
      id: crypto.randomUUID(),
      source: mainNodes[1].id,
      target: mainNodes[4].id,
      sourceHandle: mainNodes[1].data.dots[1].id
    },
    {
      id: crypto.randomUUID(),
      source: mainNodes[1].id,
      target: mainNodes[7].id,
      sourceHandle: mainNodes[1].data.dots[2].id,
      targetHandle: 'left'
    },
    {
      id: crypto.randomUUID(),
      source: mainNodes[5].id,
      target: mainNodes[6].id,
      sourceHandle: 'left'
    },
    {
      id: crypto.randomUUID(),
      source: mainNodes[7].id,
      target: mainNodes[8].id,
      sourceHandle: mainNodes[7].data.dots[1].id
    }
  ] satisfies Edge[]

  const INITIALS_NODES = [
    ...logoNodes,
    ...mainNodes
  ] satisfies NodeCustomProps[]

  const INITIALS_EDGES = [...logoEdges, ...mainEdges] satisfies Edge[]

  return {
    NODE_TYPES,
    EDGE_TYPES,
    INITIALS_NODES,
    INITIALS_EDGES
  }
}

export { useFlow }
