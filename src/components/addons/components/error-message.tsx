import { useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { addonsState, errorsState } from '../../../recoil'
import { AlertMessage } from '../../alert-message'

const ERROR_MESSAGE_LABEL =
  'Please select one or more addons to enhance your password.'

const ErrorMessage: React.FC = () => {
  const [addons] = useRecoilState(addonsState)
  const [errors, setErrors] = useRecoilState(errorsState)

  const handleCloseErrorMessage = useCallback(() => {
    setErrors(null)
  }, [setErrors])

  useEffect(() => {
    if (addons.length === 0) {
      setErrors({
        type: 'empty-addons',
        message: ERROR_MESSAGE_LABEL
      })
    } else setErrors(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addons])

  return errors?.type === 'empty-addons' ? (
    <AlertMessage
      type='error'
      className='-top-28 -left-12 text-white'
      label={ERROR_MESSAGE_LABEL}
      onClick={handleCloseErrorMessage}
    />
  ) : null
}

export { ErrorMessage }
