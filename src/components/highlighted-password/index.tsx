/* eslint-disable @typescript-eslint/ban-types */
import { useRecoilValue } from 'recoil'

import { passwordState } from '../../recoil'
import { cn } from '../../utils'
import { getNumbers, getSymbols, getUppercases } from './utils'

type HighlightedPasswordProps = {}

const HighlightedPassword: React.FC<HighlightedPasswordProps> = () => {
  const password = useRecoilValue(passwordState)

  const uppercases = getUppercases(password)

  const symbols = getSymbols(password)

  const numbers = getNumbers(password)

  const highlightedPassword = [...password].map((char, index) => {
    const isSymbol = symbols.some(({ position }) => position === index)

    const isUppercase = uppercases.some(({ position }) => position === index)

    const isNumber = numbers.some(({ position }) => position === index)

    return (
      <span
        key={index}
        className={cn(
          'font-bold',
          isSymbol && 'text-red-400',
          isUppercase && 'text-white',
          isNumber && 'text-purple-400'
        )}
      >
        {char}
      </span>
    )
  })

  return (
    <div className='flex items-center justify-center flex-wrap text-gray-400 w-full max-w-[250px]'>
      {highlightedPassword}
    </div>
  )
}

export { HighlightedPassword }
