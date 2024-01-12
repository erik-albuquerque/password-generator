import { useRecoilCallback, useRecoilValue } from 'recoil'

import { addonsState, globalErrorsState } from '../../../recoil'
import { Addon as AddonTypes } from '../../../types'
import { cn } from '../../../utils'

type AddonProps = {
  type: AddonTypes
  children: React.ReactNode
}

const Addon: React.FC<AddonProps> = ({ type, children }: AddonProps) => {
  const globalErrors = useRecoilValue(globalErrorsState)
  const addons = useRecoilValue(addonsState)

  const isActive = addons.includes(type)
  const isPasswordLengthError = globalErrors?.type === 'password-length-error'

  const handleToggleAddon = useRecoilCallback(
    ({ set }) =>
      () => {
        set(addonsState, (oldAddons) =>
          isActive
            ? oldAddons.filter((addon) => addon !== type)
            : [...oldAddons, type]
        )
      },
    [isActive, type]
  )

  return (
    <button
      type='button'
      className={cn(
        'transition-colors rounded-lg p-1 border border-transparent hover:border-gray-400',
        'disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:border-transparent',
        isActive && 'bg-gray-700'
      )}
      onClick={handleToggleAddon}
      disabled={isPasswordLengthError}
    >
      {children}
    </button>
  )
}

export { Addon }
