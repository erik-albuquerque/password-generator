import { Toast } from '../../toast'

type ToastSuccessProps = {
  onClose: () => void
  children: React.ReactNode
}

const ToastSuccess: React.FC<ToastSuccessProps> = ({
  children,
  onClose
}: ToastSuccessProps) => {
  return (
    <Toast.Root type='success' className='-bottom-16'>
      <Toast.Title>Copy to clipboard</Toast.Title>
      <Toast.Description className='font-bold break-all truncate max-w-[250px]'>
        {children}
      </Toast.Description>
      <Toast.Close onClick={onClose} />
    </Toast.Root>
  )
}

export { ToastSuccess }
