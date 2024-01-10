import { useCallback, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

import { addonsState } from '../../../recoil'
import { AlertMessage } from '../../alert-message'

const ERROR_MESSAGE_LABEL =
  'Please select one or more addons to enhance your password.'

const ErrorMessage: React.FC = () => {
  const [addons] = useRecoilState(addonsState)
  const [shouldShowErrorMessage, setShouldShowErrorMessage] = useState(false)

  const handleCloseErrorMessage = useCallback(() => {
    setShouldShowErrorMessage(false)
  }, [])

  useEffect(() => {
    setShouldShowErrorMessage(addons.length === 0)
  }, [addons])

  return shouldShowErrorMessage ? (
    <AlertMessage
      type='error'
      className='-top-28 -left-12 text-white'
      label={ERROR_MESSAGE_LABEL}
      onClick={handleCloseErrorMessage}
    />
  ) : null
}

export { ErrorMessage }
