import { atom } from 'recoil'

type GlobalErrorState = {
  type: 'empty-addons' | 'password-length-error'
  message: string
}

const globalErrorsState = atom<GlobalErrorState | null>({
  key: 'errors',
  default: null
})

export { globalErrorsState }
