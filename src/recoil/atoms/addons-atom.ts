import { atom } from 'recoil'
import { Addons } from '../../@types'

const addonsState = atom<Addons>({
  key: 'addons',
  default: ['CapitalLetters', 'Symbols']
})

export { addonsState }
