import { cn } from '../utils'
import { XIcon } from './icons'

type AlertMessageProps = {
  label: string
  type: 'success' | 'error'
  className?: string
  onClose: () => void
}

const AlertMessage: React.FC<AlertMessageProps> = ({
  label,
  type,
  className,
  onClose
}: AlertMessageProps) => {
  return (
    <div
      onClick={onClose}
      className={cn(
        'absolute min-w-max flex flex-row items-center gap-2 py-1 px-3 rounded-md',
        type === 'success' && 'bg-green-500 hover:bg-green-500/90',
        type === 'error' && 'bg-red-400 hover:bg-red-400/90',
        className
      )}
    >
      <span className='font-semibold text-sm max-w-[250px]'>{label}</span>

      <XIcon />
    </div>
  )
}

export { AlertMessage }
