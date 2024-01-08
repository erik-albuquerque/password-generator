import { Addon } from './components/Addon'
import { LowercaseIcon, NumbersIcon, SymbolsIcon,UppercaseIcon } from './components/icons'

const Addons = () => {
  return (
    <div className='flex flex-row items-center gap-4'>
      <Addon type='Numbers'>
        <NumbersIcon />
      </Addon>
      <Addon type='Lowercase'>
        <LowercaseIcon />
      </Addon>
      <Addon type='Uppercase'>
        <UppercaseIcon />
      </Addon>
      <Addon type='Symbols'>
        <SymbolsIcon />
      </Addon>
    </div>
  )
}

export { Addons }
