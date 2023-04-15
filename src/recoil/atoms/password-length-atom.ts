import { atom } from 'recoil'

const passwordLengthState = atom<number>({
  key: 'passwordLength',
  default: 17
})

export { passwordLengthState }
