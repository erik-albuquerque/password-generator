import { ErrorMessage } from './components/error-message'
import { FactoryAddons } from './components/factory-addons'

const Addons: React.FC = () => {
  return (
    <div className='relative'>
      <FactoryAddons />

      <ErrorMessage />
    </div>
  )
}

export { Addons }
