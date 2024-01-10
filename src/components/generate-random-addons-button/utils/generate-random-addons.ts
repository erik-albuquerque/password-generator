import { Addons } from '../../../types'

const generateRandomAddons = (): Addons => {
  const ADDONS: Addons = ['Numbers', 'Lowercase', 'Uppercase', 'Symbols']

  const randomLength = Math.floor(Math.random() * ADDONS.length) + 1

  const [...randomAddons] = ADDONS.sort(() => Math.random() - 0.5).slice(
    0,
    randomLength
  )

  return randomAddons
}

export { generateRandomAddons }
