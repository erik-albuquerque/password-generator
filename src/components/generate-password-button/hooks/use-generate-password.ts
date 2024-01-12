import { useCallback, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import {
  addonsState,
  globalErrorsState,
  passwordLengthState,
  passwordState
} from '../../../recoil'
import { delay } from '../../../utils'
import { generatePassword } from '../utils/generate-password'

const useGeneratePassword = () => {
  const globalErrors = useRecoilValue(globalErrorsState)
  const [isLoading, setIsLoading] = useState(false)

  const addons = useRecoilValue(addonsState)
  const passwordLength = useRecoilValue(passwordLengthState)
  const setPassword = useSetRecoilState(passwordState)

  const isError = !!globalErrors || addons.length === 0

  const handleGeneratePassword = useCallback(async () => {
    if (isLoading || addons.length === 0) return
    setIsLoading(true)
    await delay(500) // 500 ms
    const password = generatePassword(addons, passwordLength)
    setPassword(password)
    setIsLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addons, isLoading, passwordLength])

  return {
    handleGeneratePassword,
    isError,
    isLoading
  }
}

export { useGeneratePassword }
