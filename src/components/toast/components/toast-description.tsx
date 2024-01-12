import { Slot, SlotProps } from '@radix-ui/react-slot'

import { cn } from '../../../utils'

type ToastDescriptionProps = SlotProps & {
  asChild?: boolean
}

const ToastDescription: React.FC<ToastDescriptionProps> = ({
  children,
  className = undefined,
  asChild = false,
  ...rest
}: ToastDescriptionProps) => {
  const Component = asChild ? Slot : 'span'

  return (
    <Component
      className={cn(
        'w-full text-xs text-white font-normal [grid-area:_description]',
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}

export { ToastDescription }
