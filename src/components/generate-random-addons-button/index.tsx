import { useCallback, useState } from 'react'
import { Grid } from 'react-loader-spinner'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { addonsState, globalErrorsState } from '../../recoil'
import { cn, delay } from '../../utils'
import { generateRandomAddons } from './utils/generate-random-addons'

const GenerateRandomAddonsButton = () => {
  const [isLoading, setIsLoading] = useState(false)

  const globalErrors = useRecoilValue(globalErrorsState)
  const setAddons = useSetRecoilState(addonsState)
  const isPasswordLengthError = globalErrors?.type === 'password-length-error'

  const handleGenerateRandomAddons = useCallback(async () => {
    if (isLoading) return
    setIsLoading(true)
    await delay(500) // 500 ms
    const randomAddons = generateRandomAddons()
    setAddons(randomAddons)
    setIsLoading(false)
  }, [isLoading, setAddons])

  return (
    <button
      type='button'
      className={cn(
        'py-3 px-4 flex items-center justify-center rounded-full bg-purple-500 hover:bg-purple-500/90 transition-colors',
        'disabled:cursor-not-allowed disabled:bg-red-400 disabled:opacity-70',
        isLoading && 'w-[92.48px] h-12 cursor-not-allowed'
      )}
      onClick={handleGenerateRandomAddons}
      disabled={isLoading || isPasswordLengthError}
    >
      {isLoading ? <Grid color='#fff' width={20} /> : <span>Random</span>}
    </button>
  )
}

export { GenerateRandomAddonsButton }
