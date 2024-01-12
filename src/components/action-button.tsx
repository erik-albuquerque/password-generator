import { ComponentProps } from 'react'
import { TailSpin } from 'react-loader-spinner'

import { cn } from '../utils'

type ActionButtonProps = ComponentProps<'button'> & {
  isLoading?: boolean
}

const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  isLoading = false,
  ...rest
}: ActionButtonProps) => {
  return (
    <button
      type='button'
      className={cn(
        'w-full min-w-[102px] py-3 px-4 flex items-center text-center rounded-full justify-center bg-purple-500 hover:bg-purple-500/90 transition-colors',
        'disabled:cursor-not-allowed disabled:bg-red-400 disabled:opacity-70',
        isLoading && 'cursor-not-allowed'
      )}
      {...rest}
    >
      {isLoading ? (
        <TailSpin color='#fff' width={24} height={24} />
      ) : (
        <span>{children}</span>
      )}
    </button>
  )
}

export { ActionButton }
