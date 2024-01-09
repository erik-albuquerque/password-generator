import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'

import { Input } from '../components'
import { passwordLengthState } from '../recoil'

type PasswordLengthInputProps = {
  min?: number
  max?: number
}

const PasswordLengthInput: React.FC<PasswordLengthInputProps> = ({
  min = 1,
  max = 99
}: PasswordLengthInputProps) => {
  const [passwordLength, setPasswordLength] =
    useRecoilState(passwordLengthState)

  const updatePasswordLength = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordLength(Number(event.target.value))
  }

  return (
    <Input.Root>
      <Input.Input
        type='number'
        value={passwordLength}
        min={min}
        max={max}
        onChange={updatePasswordLength}
        className='font-medium max-w-[35px] text-center'
      />
    </Input.Root>
  )
}

export { PasswordLengthInput }
