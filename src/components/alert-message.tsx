import { ComponentProps } from 'react'

import { cn } from '../utils'
import { XIcon } from './icons'

type AlertMessageProps = ComponentProps<'div'> & {
  label: string
  type: 'success' | 'error'
  className?: string
}

const AlertMessage: React.FC<AlertMessageProps> = ({
  label,
  type,
  className,
  ...props
}: AlertMessageProps) => {
  return (
    <div
      className={cn(
        'absolute min-w-max flex flex-row items-center gap-2 py-1 px-3 rounded-md',
        type === 'success' && 'bg-green-500 hover:bg-green-500/90',
        type === 'error' && 'bg-red-400 hover:bg-red-400/90',
        className
      )}
      {...props}
    >
      <span className='font-semibold text-sm max-w-[250px]'>{label}</span>

      <XIcon />
    </div>
  )
}

export { AlertMessage }
