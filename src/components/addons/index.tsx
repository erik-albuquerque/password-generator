import { EmptyAddonsError } from './components/empty-addons-error'
import { FactoryAddons } from './components/factory-addons'

const Addons: React.FC = () => {
  return (
    <div className='relative'>
      <FactoryAddons />

      <EmptyAddonsError />
    </div>
  )
}

export { Addons }
