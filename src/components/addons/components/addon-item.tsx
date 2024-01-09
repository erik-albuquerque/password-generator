import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil'

import { addonsState } from '../../../recoil'
import { Addon } from '../../../types'
import { cn } from '../../../utils'

type AddonItemProps = {
  type: Addon
  children: React.ReactNode
}

const AddonItem: React.FC<AddonItemProps> = ({
  type,
  children
}: AddonItemProps) => {
  const [addons] = useRecoilState(addonsState)
  const isActive = addons.includes(type)
  const disabled = !useRecoilValue(addonsState)

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
        isActive && 'bg-gray-700',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
      onClick={handleToggleAddon}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export { AddonItem }
