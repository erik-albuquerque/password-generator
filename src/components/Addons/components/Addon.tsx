import clsx from 'clsx'
import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil'

import { addonsState } from '../../../recoil'
import { Addon as AddonTypes } from '../../../types'

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
      className={clsx(
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

export { Addon }
