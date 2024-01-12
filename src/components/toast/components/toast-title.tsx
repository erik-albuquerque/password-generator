import { Slot, SlotProps } from '@radix-ui/react-slot'

import { cn } from '../../../utils'

type ToastTitleProps = SlotProps & {
  asChild?: boolean
}

const ToastTitle: React.FC<ToastTitleProps> = ({
  children,
  className = undefined,
  asChild = false,
  ...rest
}: ToastTitleProps) => {
  const Component = asChild ? Slot : 'span'

  return (
    <Component className={cn('font-semibold text-sm [grid-area:_title]', className)} {...rest}>
      {children}
    </Component>
  )
}

export { ToastTitle }
