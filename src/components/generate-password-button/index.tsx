import { ActionButton } from '../action-button'
import { useGeneratePassword } from './hooks/use-generate-password'

const GeneratePasswordButton: React.FC = () => {
  const { handleGeneratePassword, isError, isLoading } = useGeneratePassword()

  return (
    <ActionButton
      onClick={handleGeneratePassword}
      disabled={isLoading || isError}
      isLoading={isLoading}
    >
      Generate
    </ActionButton>
  )
}

export { GeneratePasswordButton }
