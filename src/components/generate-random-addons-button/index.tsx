import { useCallback, useState } from 'react'
import { Grid } from 'react-loader-spinner'
import { useSetRecoilState } from 'recoil'

import { addonsState } from '../../recoil'
import { cn,delay } from '../../utils'
import { generateRandomAddons } from './utils/generate-random-addons'

const GenerateRandomAddonsButton = () => {
  const setAddons = useSetRecoilState(addonsState)

  const [isLoading, setIsLoading] = useState(false)

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
        'py-3 px-4 flex items-center justify-center rounded-full bg-purple-500 hover:bg-purple-500/90',
        'disabled:cursor-not-allowed',
        isLoading && 'w-[92.48px] h-[48px]'
      )}
      disabled={isLoading}
      onClick={handleGenerateRandomAddons}
    >
      {isLoading ? <Grid color='#fff' width={20} /> : <span>Random</span>}
    </button>
  )
}

export { GenerateRandomAddonsButton }
