import clsx from 'clsx'
import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil'

import { addonsState } from '../recoil/atoms/addons-atom'
import { Addon } from '../types'

type AddonButtonProps = {
  type: Addon
  children: React.ReactNode
}

const AddonButton: React.FC<AddonButtonProps> = ({
  type,
  children
}: AddonButtonProps) => {
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

export { AddonButton }
