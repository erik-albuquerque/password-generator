import { generate } from 'generate-password-browser'
import { useCallback, useState } from 'react'
import { Grid } from 'react-loader-spinner'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { addonsState, passwordLengthState, passwordState } from '../recoil'
import { cn,delay } from '../utils'

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
    <button
      type='button'
      className={cn(
        'py-3 px-4 flex items-center rounded-full justify-center bg-purple-500 hover:bg-purple-500/90',
        'disabled:cursor-not-allowed disabled:bg-red-400/90',
        isLoading && 'w-[98.72px] h-12 cursor-not-allowed'
      )}
      onClick={handleGeneratePassword}
      disabled={noAddonsSelected}
    >
      {isLoading ? <Grid color='#fff' width={20} /> : <span>Generate</span>}
    </button>
  )
}

export { GeneratePasswordButton }
