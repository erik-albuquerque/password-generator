import { atom } from 'recoil'

import { Addons } from '../../types'

const addonsState = atom<Addons>({
  key: 'addons',
  default: ['Uppercase', 'Symbols']
})

export { addonsState }
