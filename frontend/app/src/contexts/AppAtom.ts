import { atom } from 'recoil'

export const NumState = atom<number>({
  // access key
  key: 'NumState',
  // initialize
  default: 0,
})
