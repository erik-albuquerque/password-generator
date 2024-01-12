import { useCallback, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { addonsState, globalErrorsState } from '../../../recoil'
import { delay } from '../../../utils'
import { generateRandomAddons } from '../utils/generate-random-addons'

const useGenerateRandomAddons = () => {
  const [isLoading, setIsLoading] = useState(false)

  const globalErrors = useRecoilValue(globalErrorsState)
  const setAddons = useSetRecoilState(addonsState)
  const isError = globalErrors?.type === 'password-length-error'

  const handleGenerateRandomAddons = useCallback(async () => {
    if (isLoading) return
    setIsLoading(true)
    await delay(500) // 500 ms
    const randomAddons = generateRandomAddons()
    setAddons(randomAddons)
    setIsLoading(false)
  }, [isLoading, setAddons])

  return {
    handleGenerateRandomAddons,
    isError,
    isLoading
  }
}

export { useGenerateRandomAddons }
