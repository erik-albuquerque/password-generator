import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { passwordLengthState } from '../recoil'
import { Input } from '../components'

type InputPasswordLengthProps = {
  min?: number
  max?: number
}

const InputPasswordLength: React.FC<InputPasswordLengthProps> = ({
  min = 1,
  max = 99
}: InputPasswordLengthProps) => {
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

export { InputPasswordLength }
