import { Addon as AddonTypes } from '../../../types'
import { LowercaseIcon, NumbersIcon, SymbolsIcon,UppercaseIcon } from '../../icons'
import { Addon } from './addon'

type AvailableAddonsTypes = {
  type: AddonTypes
  icon: JSX.Element
}

const availableAddons: AvailableAddonsTypes[] = [
  { type: 'Numbers', icon: <NumbersIcon /> },
  { type: 'Lowercase', icon: <LowercaseIcon /> },
  { type: 'Uppercase', icon: <UppercaseIcon /> },
  { type: 'Symbols', icon: <SymbolsIcon /> }
]

const FactoryAddons: React.FC = () => {
  return (
    <div className='flex flex-row items-center gap-4'>
      {availableAddons.map(({ type, icon }) => (
        <Addon key={type} type={type}>
          {icon}
        </Addon>
      ))}
    </div>
  )
}

export { FactoryAddons }
