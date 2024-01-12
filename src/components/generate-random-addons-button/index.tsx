import { ActionButton } from '../action-button'
import { useGenerateRandomAddons } from './hooks/use-generate-random-addons'

const GenerateRandomAddonsButton = () => {
  const { handleGenerateRandomAddons, isError, isLoading } =
    useGenerateRandomAddons()

  return (
    <ActionButton
      onClick={handleGenerateRandomAddons}
      disabled={isLoading || isError}
      isLoading={isLoading}
    >
      Random
    </ActionButton>
  )
}

export { GenerateRandomAddonsButton }
