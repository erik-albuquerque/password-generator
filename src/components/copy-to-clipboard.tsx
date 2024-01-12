import { useCallback, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

import { passwordState } from '../recoil'
import { CopyIcon } from './icons'
import { Toast } from './toast'

const TOAST_MESSAGE_TIMEOUT_MS = 3000 // 3s

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

    const toastMessageTimeout = setTimeout(
      () => setIsSuccess(false),
      TOAST_MESSAGE_TIMEOUT_MS
    )

    return () => clearTimeout(toastMessageTimeout)
  }, [setIsSuccess, isSuccess])

  const RenderToastMessage = () => {
    if (isSuccess) {
      return (
        <Toast.Root type='success' className='-bottom-16'>
          <Toast.Title>Copy to clipboard</Toast.Title>
          <Toast.Description className='font-bold break-all truncate max-w-[250px]'>
            {password}
          </Toast.Description>
          <Toast.Close onClick={() => setIsSuccess(false)} />
        </Toast.Root>
      )
    }

    if (error) {
      return (
        <Toast.Root type='error' className='-bottom-16'>
          <Toast.Title>Error on copy to clipboard</Toast.Title>
          <Toast.Description className='font-bold break-all truncate'>
            {error}
          </Toast.Description>
          <Toast.Close onClick={() => setError('')} />
        </Toast.Root>
      )
    }

    return null
  }

  return (
    <div className='relative'>
      <button
        type='button'
        onClick={copyToClipboard}
        className='flex flex-row items-center py-3 pl-3 pr-4 gap-1 rounded-full bg-gray-700 hover:bg-gray-700/80'
      >
        <CopyIcon />

        <span className='font-medium'>Copy</span>
      </button>

      <RenderToastMessage />
    </div>
  )
}

export { CopyToClipboard }
