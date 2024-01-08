import clsx from 'clsx'
import { generate } from 'generate-password-browser'
import { useCallback, useState } from 'react'
import { Grid } from 'react-loader-spinner'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { addonsState, passwordLengthState, passwordState } from '../recoil'
import { delay } from '../utils'

const GeneratePasswordButton = () => {
  const [isLoading, setIsLoading] = useState(false)

  const addons = useRecoilValue(addonsState)
  const passwordLength = useRecoilValue(passwordLengthState)
  const setPassword = useSetRecoilState(passwordState)

  const handleGeneratePassword = useCallback(async () => {
    if (isLoading) return

    setIsLoading(true)

    await delay(500) // 500 ms

    const password = generate({
      length: passwordLength,
      numbers: addons.includes('Numbers'),
      lowercase: addons.includes('Lowercase'),
      uppercase: addons.includes('Uppercase'),
      symbols: addons.includes('Symbols')
    })

    setPassword(password)

    setIsLoading(false)
  }, [addons, isLoading, passwordLength, setPassword])

  return (
    <div
      className={clsx(
        'py-3 px-4 flex items-center justify-center',
        'aria-disabled:cursor-not-allowed',
        isLoading && 'w-[98.72px] h-[48px]'
      )}
      onClick={handleGeneratePassword}
      aria-disabled={isLoading}
    >
      {isLoading ? <Grid color='#fff' width={20} /> : <span>Generate</span>}
    </div>
  )
}

export { GeneratePasswordButton }
