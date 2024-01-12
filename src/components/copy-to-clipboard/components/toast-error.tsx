import { Toast } from '../../toast'

type ToastErrorProps = {
  onClose: () => void
  children: React.ReactNode
}

const ToastError: React.FC<ToastErrorProps> = ({
  children,
  onClose
}: ToastErrorProps) => {
  return (
    <Toast.Root type='error' className='-bottom-16'>
      <Toast.Title>Clipboard error</Toast.Title>
      <Toast.Description className='font-bold break-all truncate'>
        {children}
      </Toast.Description>
      <Toast.Close onClick={onClose} />
    </Toast.Root>
  )
}

export { ToastError }
