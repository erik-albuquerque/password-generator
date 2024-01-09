import { useCallback, useEffect, useRef, useState } from 'react'
import { useRecoilValue } from 'recoil'

import { passwordState } from '../../recoil'
import { CopyIcon } from '../icons'
import { MessageTag } from './components'

const MESSAGE_TAG_TIMEOUT_MS = 2000 // 2s

const CopyToClipboard = () => {
  const messageTagTimeoutIdRef = useRef<number>()

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

    messageTagTimeoutIdRef.current = setTimeout(
      () => setIsSuccess(false),
      MESSAGE_TAG_TIMEOUT_MS
    )

    return () => clearTimeout(messageTagTimeoutIdRef.current)
  }, [setIsSuccess, isSuccess])

  const RenderMessageTag = () => {
    if (isSuccess) {
      return (
        <MessageTag
          type='success'
          label={password}
          onClose={() => setIsSuccess(false)}
          className='-bottom-10'
        />
      )
    }

    if (error) {
      return (
        <MessageTag
          type='error'
          label={error}
          onClose={() => setError('')}
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

      <RenderMessageTag />
    </div>
  )
}

export { CopyToClipboard }
