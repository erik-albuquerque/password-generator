import clsx from 'clsx'
import { useCallback, useState } from 'react'
import { Grid } from 'react-loader-spinner'
import { useSetRecoilState } from 'recoil'

import { addonsState } from '../recoil'
import { Addons } from '../types'
import { delay } from '../utils'

const GenerateRandomAddonsButton = () => {
  const setAddons = useSetRecoilState(addonsState)

  const [isLoading, setIsLoading] = useState(false)

  const getRandomAddons = useCallback((): Addons => {
    const ADDONS: Addons = ['Numbers', 'Lowercase', 'Uppercase', 'Symbols']

    const randomLength = Math.floor(Math.random() * ADDONS.length) + 1

    const [...randomAddons] = ADDONS.sort(() => Math.random() - 0.5).slice(
      0,
      randomLength
    )

    return randomAddons
  }, [])

  const handleGenerateAddons = useCallback(async () => {
    if (isLoading) return

    setIsLoading(true)

    await delay(500)

    const randomAddons = getRandomAddons()

    setAddons(randomAddons)

    setIsLoading(false)
  }, [getRandomAddons, isLoading, setAddons])

  return (
    <div
      className={clsx(
        'py-3 px-4 flex items-center justify-center',
        'aria-disabled:cursor-not-allowed',
        isLoading && 'w-[92.48px] h-[48px]'
      )}
      aria-disabled={isLoading}
      onClick={handleGenerateAddons}
    >
      {isLoading ? <Grid color='#fff' width={20} /> : <span>Random</span>}
    </div>
  )
}

export { GenerateRandomAddonsButton }
