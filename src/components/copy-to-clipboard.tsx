import { useCallback, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

import { passwordState } from '../recoil'
import { AlertMessage } from './alert-message'
import { CopyIcon } from './icons'

const ALERT_MESSAGE_TIMEOUT_MS = 2000 // 2s

const CopyToClipboard = () => {
  const password = useRecoilValue(passwordState)

  const [error, setError] = useState('')
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
      setError('Error on copy the password!')

      console.error('Error on copy the password!', error)
    }
  }, [password])

  useEffect(() => {
    if (!isSuccess) return

    const alertMessageTimeout = setTimeout(
      () => setIsSuccess(false),
      ALERT_MESSAGE_TIMEOUT_MS
    )

    return () => clearTimeout(alertMessageTimeout)
  }, [setIsSuccess, isSuccess])

  const RenderAlertMessage = () => {
    if (isSuccess) {
      return (
        <AlertMessage
          type='success'
          label={password}
          onClick={() => setIsSuccess(false)}
          className='-bottom-10'
        />
      )
    }

    if (error) {
      return (
        <AlertMessage
          type='error'
          label={error}
          onClick={() => setError('')}
          className='-bottom-10'
        />
      )
    }

    return null
  }

  return (
    <div className='relative'>
      <div
        onClick={copyToClipboard}
        className='flex flex-row items-center py-3 pl-3 pr-4 gap-1 rounded-full bg-gray-700 hover:bg-gray-700/80'
      >
        <CopyIcon />

        <span className='font-medium'>Copy</span>
      </div>

      <RenderAlertMessage />
    </div>
  )
}

export { CopyToClipboard }
