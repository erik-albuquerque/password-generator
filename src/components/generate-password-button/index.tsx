import { useCallback, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import {
  addonsState,
  globalErrorsState,
  passwordLengthState,
  passwordState
} from '../../recoil'
import { delay } from '../../utils'
import { ActionButton } from '../action-button'
import { generatePassword } from './utils/generate-password'

const GeneratePasswordButton: React.FC = () => {
  const globalErrors = useRecoilValue(globalErrorsState)
  const [isLoading, setIsLoading] = useState(false)

  const addons = useRecoilValue(addonsState)
  const passwordLength = useRecoilValue(passwordLengthState)
  const setPassword = useSetRecoilState(passwordState)
  const isAddonsEmpty = addons.length === 0
  const isPasswordLengthError = globalErrors?.type === 'password-length-error'

  const handleGeneratePassword = useCallback(async () => {
    if (isLoading || isAddonsEmpty) return
    setIsLoading(true)
    await delay(500) // 500 ms
    const password = generatePassword(addons, passwordLength)
    setPassword(password)
    setIsLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addons, isLoading, isAddonsEmpty, passwordLength])

  return (
    <ActionButton
      onClick={handleGeneratePassword}
      disabled={isLoading || isAddonsEmpty || isPasswordLengthError}
      isLoading={isLoading}
    >
      Generate
    </ActionButton>
  )
}

export { GeneratePasswordButton }
