import { Node } from 'reactflow'

import { Dot, Overwrite } from '.'

type NodeCustomProps = Overwrite<
  Node,
  {
    data: {
      width?: number
      height?: number
      action?: () => unknown
      className?: string
      dots: Dot[]
      children?: React.ReactNode
      title?: string
      headerStyle?: string
    }
  }
>

export type { NodeCustomProps }
