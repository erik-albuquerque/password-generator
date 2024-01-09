import { useCallback, useEffect, useRef, useState } from 'react'
import { useRecoilValue } from 'recoil'

import { passwordState } from '../../recoil'
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
        <svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M4.12725 3.47025L4.125 5.0625V12.9405C4.125 13.587 4.38181 14.207 4.83893 14.6641C5.29605 15.1212 5.91603 15.378 6.5625 15.378H13.0245C12.9081 15.707 12.6925 15.9919 12.4075 16.1933C12.1225 16.3948 11.782 16.503 11.433 16.503H6.5625C5.61767 16.503 4.71153 16.1277 4.04343 15.4596C3.37533 14.7915 3 13.8853 3 12.9405V5.0625C3 4.3275 3.47025 3.70125 4.12725 3.47025ZM13.3125 1.5C13.5341 1.5 13.7535 1.54365 13.9583 1.62845C14.163 1.71326 14.349 1.83756 14.5057 1.99426C14.6624 2.15096 14.7867 2.33698 14.8715 2.54172C14.9564 2.74646 15 2.96589 15 3.1875V12.9375C15 13.1591 14.9564 13.3785 14.8715 13.5833C14.7867 13.788 14.6624 13.974 14.5057 14.1307C14.349 14.2874 14.163 14.4117 13.9583 14.4965C13.7535 14.5814 13.5341 14.625 13.3125 14.625H6.5625C6.11495 14.625 5.68572 14.4472 5.36926 14.1307C5.05279 13.8143 4.875 13.3851 4.875 12.9375V3.1875C4.875 2.73995 5.05279 2.31072 5.36926 1.99426C5.68572 1.67779 6.11495 1.5 6.5625 1.5H13.3125Z'
            fill='white'
          />
        </svg>

        <span className='font-medium'>Copy</span>
      </div>

      <RenderMessageTag />
    </div>
  )
}

export { CopyToClipboard }
