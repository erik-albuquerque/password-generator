import { ComponentProps } from 'react'

import { cn } from '../../../utils'
import { XIcon } from '../../icons'

type ToastCloseProps = ComponentProps<'div'>

const ToastClose: React.FC<ToastCloseProps> = ({
  className = undefined,
  ...rest
}: ToastCloseProps) => {
  return (
    <div
      className={cn(
        'flex items-center [grid-area:_close] hover:text-gray-300 transition-colors',
        className
      )}
      {...rest}
    >
      <XIcon />
    </div>
  )
}

export { ToastClose }
