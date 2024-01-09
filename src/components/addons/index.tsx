import { AddonItem } from './components/addon-item'
import { LowercaseIcon, NumbersIcon, SymbolsIcon,UppercaseIcon } from './components/icons'

const Addons = () => {
  return (
    <div className='flex flex-row items-center gap-4'>
      <AddonItem type='Numbers'>
        <NumbersIcon />
      </AddonItem>
      <AddonItem type='Lowercase'>
        <LowercaseIcon />
      </AddonItem>
      <AddonItem type='Uppercase'>
        <UppercaseIcon />
      </AddonItem>
      <AddonItem type='Symbols'>
        <SymbolsIcon />
      </AddonItem>
    </div>
  )
}

export { Addons }
