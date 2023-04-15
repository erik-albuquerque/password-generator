import { atom } from 'recoil'

const passwordState = atom<string>({
  key: 'password',
  default: 'sqDJJpl?£z=BUHOjm'
})

export { passwordState }
