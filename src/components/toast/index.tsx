import { ComponentProps } from 'react'

import { cn } from '../../utils'
import { ToastClose,ToastDescription, ToastTitle } from './components'

type ToastRootProps = ComponentProps<'div'> & {
  type?: 'default' | 'success' | 'error' | 'warning'
}

const ToastRoot: React.FC<ToastRootProps> = ({
  children,
  className = undefined,
  type = 'default',
  ...rest
}: ToastRootProps) => {
  return (
    <div
      data-type={type}
      className={cn(
        'absolute min-w-max grid [grid-template-areas:_"title_close"_"description_close"] grid-cols-[auto_max-content] gap-x-4 gap-y-1 py-2 px-3 rounded-md',
        'data-[type="default"]:bg-gray-800 data-[type="success"]:bg-green-500 data-[type="error"]:bg-red-400 data-[type="warning"]:bg-yellow-500 data-[type="warning"]:text-black',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

const Toast = {
  Root: ToastRoot,
  Title: ToastTitle,
  Description: ToastDescription,
  Close: ToastClose
}

export { Toast }
