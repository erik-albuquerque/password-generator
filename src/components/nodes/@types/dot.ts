type Dot = {
  id: string
  type: 'source' | 'target'
  position: 'Left' | 'Right' | 'Top' | 'Bottom'
  left?: number
  right?: number
  top?: number
  bottom?: number
}

export type { Dot }
