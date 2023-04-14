/* eslint-disable @typescript-eslint/ban-types */
import clsx from 'clsx'
import { getCapitalLetters, getSymbols } from './utils'
import { passwordState } from '../../recoil'
import { useRecoilValue } from 'recoil'

type PasswordTextProps = {}

const PasswordText: React.FC<PasswordTextProps> = () => {
  const password = useRecoilValue(passwordState)

  const capitalLetters = getCapitalLetters(password)

  const symbols = getSymbols(password)

  const passwordWithStyles = [...password].map((char, index) => {
    const isSymbol = symbols.some(({ position }) => position === index)

    const isCapital = capitalLetters.some(({ position }) => position === index)

    return (
      <span
        key={index}
        className={clsx(
          isSymbol && 'text-red-400 font-bold',
          isCapital && 'text-white font-bold'
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
