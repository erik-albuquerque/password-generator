import { ChangeEvent, useState } from 'react'
import { useRecoilState } from 'recoil'

import { globalErrorsState, passwordLengthState } from '../../recoil'
import { Input } from '../input'
import { Toast } from '../toast'
import {
  INPUT_ERROR_MESSAGE,
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH
} from './constants'

type PasswordLengthInputProps = {
  min?: number
  max?: number
}

const PasswordLengthInput: React.FC<PasswordLengthInputProps> = ({
  min = MIN_PASSWORD_LENGTH,
  max = MAX_PASSWORD_LENGTH
}: PasswordLengthInputProps) => {
  const [shouldShowInputError, setShouldShowInputError] = useState(false)

  const [globalErrors, setGlobalErrors] = useRecoilState(globalErrorsState)
  const [passwordLength, setPasswordLength] =
    useRecoilState(passwordLengthState)

  const isPasswordLengthError = globalErrors?.type === 'password-length-error'

  const handleResetInputError = () => setShouldShowInputError(false)

  const verifyPasswordLength = (length: number) => {
    if (length < MIN_PASSWORD_LENGTH || length > MAX_PASSWORD_LENGTH) {
      setGlobalErrors({
        type: 'password-length-error',
        message: INPUT_ERROR_MESSAGE
      })
      setShouldShowInputError(true)
    } else {
      handleResetInputError()
      setGlobalErrors(null)
    }
  }

  const onPasswordLengthChange = (event: ChangeEvent<HTMLInputElement>) => {
    const length = Number(event.target.value) ?? 0

    if (length > max + 1) return

    verifyPasswordLength(length)
    setPasswordLength(length)
  }

  return (
    <Input.Root className='relative'>
      <Input.Input
        type='number'
        value={passwordLength}
        min={min}
        max={max}
        onChange={onPasswordLengthChange}
        className='font-medium max-w-[35px] text-center'
      />

      {shouldShowInputError && isPasswordLengthError && (
        <Toast.Root type='error' className='-left-[340px]'>
          <Toast.Title>Password length error</Toast.Title>
          <Toast.Description className='break-all max-w-[260px]'>
            {globalErrors.message}
          </Toast.Description>
          <Toast.Close onClick={handleResetInputError} />
        </Toast.Root>
      )}
    </Input.Root>
  )
}

export { PasswordLengthInput }
