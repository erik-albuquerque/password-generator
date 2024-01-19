import { usePasswordStrengthEmoji } from './hooks/use-password-strength-emoji'

const PasswordStrengthEmoji = () => {
  const { strengthEmoji } = usePasswordStrengthEmoji()
  return <span>{strengthEmoji}</span>
}

export { PasswordStrengthEmoji }
