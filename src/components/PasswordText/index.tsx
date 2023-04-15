/* eslint-disable @typescript-eslint/ban-types */
import clsx from 'clsx'
import { useRecoilValue } from 'recoil'

import { passwordState } from '../../recoil'
import { getCapitalLetters, getNumbers, getSymbols } from './utils'

type PasswordTextProps = {}

const PasswordText: React.FC<PasswordTextProps> = () => {
  const password = useRecoilValue(passwordState)

  const capitalLetters = getCapitalLetters(password)

  const symbols = getSymbols(password)

  const numbers = getNumbers(password)

  const passwordWithStyles = [...password].map((char, index) => {
    const isSymbol = symbols.some(({ position }) => position === index)

    const isCapital = capitalLetters.some(({ position }) => position === index)

    const isNumber = numbers.some(({ position }) => position === index)

    return (
      <span
        key={index}
        className={clsx(
          isSymbol && 'text-red-400 font-bold',
          isCapital && 'text-white font-bold',
          isNumber && 'text-purple-400'
        )}
      >
        {char}
      </span>
    )
  })

  return (
    <div className='flex items-center justify-center text-gray-400 w-full max-w-[250px]'>
      {passwordWithStyles}
    </div>
  )
}

export { PasswordText }
