import { atom } from 'recoil'

const passwordLengthState = atom<number>({
  key: 'passwordLength',
  default: 8
})

export { passwordLengthState }
