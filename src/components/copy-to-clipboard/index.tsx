import { CopyIcon } from '../icons'
import { ToastError } from './components/toast-error'
import { ToastSuccess } from './components/toast-success'
import { usePasswordCopyToClipboard } from './hooks/use-password-copy-to-clipboard'

const CopyToClipboard = () => {
  const { copyToClipboard, isSuccess, password, resetValues, error } =
    usePasswordCopyToClipboard()

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

      {isSuccess && (
        <ToastSuccess onClose={resetValues}>{password}</ToastSuccess>
      )}

      {error && <ToastError onClose={resetValues}>{error}</ToastError>}

      {/* <RenderToastMessage /> */}
    </div>
  )
}

export { CopyToClipboard }
