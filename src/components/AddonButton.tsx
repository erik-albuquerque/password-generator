import clsx from 'clsx'
import { useCallback, useState } from 'react'

type AddonButtonProps = {
  children: React.ReactNode
}

const AddonButton: React.FC<AddonButtonProps> = ({
  children
}: AddonButtonProps) => {
  const [isActive, setIsActive] = useState(false)

  const handleActive = useCallback(() => {
    setIsActive((active) => !active)
  }, [])

  return (
    <button
      type='button'
      className={clsx(
        'transition-colors rounded-lg p-1 border border-transparent hover:border-gray-400',
        isActive && 'bg-gray-700'
      )}
      onClick={handleActive}
    >
      {children}
    </button>
  )
}

export { AddonButton }
