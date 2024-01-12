import { useCallback, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

import { passwordState } from '../../../recoil'

const TOAST_MESSAGE_TIMEOUT_MS = 3000 // 3s

const usePasswordCopyToClipboard = () => {
  const password = useRecoilValue(passwordState)

  const [error, setError] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)

  const copyToClipboard = useCallback(async () => {
    if (!navigator.clipboard) {
      setError('Clipboard API is not supported in this browser')
      return
    }

    try {
      await navigator.clipboard.writeText(password)
      setIsSuccess(true)
    } catch (error) {
      setError('Error on copy to clipboard!')
      setIsSuccess(false)
      console.error(error)
    }
  }, [password])

  const resetValues = useCallback(() => {
    if (isSuccess) setIsSuccess(false)
    if (error) setError('')
  }, [error, isSuccess])

  useEffect(() => {
    const toastMessageTimeout = setTimeout(
      resetValues,
      TOAST_MESSAGE_TIMEOUT_MS
    )

    return () => clearTimeout(toastMessageTimeout)
  }, [resetValues])

  return {
    password,
    copyToClipboard,
    error,
    isSuccess,
    resetValues
  }
}

export { usePasswordCopyToClipboard }
