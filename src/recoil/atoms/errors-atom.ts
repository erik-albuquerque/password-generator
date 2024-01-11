import { atom } from 'recoil'

type ErrorState = {
  type: 'empty-addons' | 'input-length-error'
  message: string
}

const errorsState = atom<ErrorState | null>({
  key: 'errors',
  default: null
})

export { errorsState }
