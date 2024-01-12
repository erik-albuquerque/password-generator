import { useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { addonsState, globalErrorsState } from '../../../recoil'
import { Toast } from '../../toast'

const EMPTY_ADDONS_ERROR_MESSAGE =
  'Please select one or more addons to enhance your password.'

const EmptyAddonsError: React.FC = () => {
  const [addons] = useRecoilState(addonsState)
  const [globalErrors, setGlobalErrors] = useRecoilState(globalErrorsState)

  const handleCloseErrorMessage = useCallback(() => {
    setGlobalErrors(null)
  }, [setGlobalErrors])

  useEffect(() => {
    if (addons.length === 0) {
      setGlobalErrors({
        type: 'empty-addons',
        message: EMPTY_ADDONS_ERROR_MESSAGE
      })
    } else setGlobalErrors(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addons])

  return globalErrors?.type === 'empty-addons' ? (
    <Toast.Root type='error' className='-top-32 -left-5 text-white'>
      <Toast.Title>Empty addons</Toast.Title>
      <Toast.Description className='font-medium break-all max-w-[270px]'>
        {globalErrors.message}
      </Toast.Description>
      <Toast.Close onClick={handleCloseErrorMessage} />
    </Toast.Root>
  ) : null
}

export { EmptyAddonsError }
