import { useRecoilCallback, useRecoilState } from 'recoil'

import { addonsState } from '../../../recoil'
import { Addon as AddonTypes } from '../../../types'
import { cn } from '../../../utils'

type AddonProps = {
  type: AddonTypes
  children: React.ReactNode
}

const Addon: React.FC<AddonProps> = ({
  type,
  children
}: AddonProps) => {
  const [addons] = useRecoilState(addonsState)
  const isActive = addons.includes(type)

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
      )}
      onClick={handleToggleAddon}
    >
      {children}
    </button>
  )
}

export { Addon }
