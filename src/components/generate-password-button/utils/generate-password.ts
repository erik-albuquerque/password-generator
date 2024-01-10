import { generate, GenerateOptions } from 'generate-password-browser'

import { Addons } from '../../../types'

const generatePassword = (addons: Addons, length = 8): string => {
  const generateOptions: GenerateOptions = {
    numbers: addons.includes('Numbers'),
    lowercase: addons.includes('Lowercase'),
    uppercase: addons.includes('Uppercase'),
    symbols: addons.includes('Symbols'),
    length
  }

  const password = generate(generateOptions)

  return password
}

export { generatePassword }
