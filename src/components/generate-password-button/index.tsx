import { useCallback, useState } from 'react'
import { Grid } from 'react-loader-spinner'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { addonsState, passwordLengthState, passwordState } from '../../recoil'
import { cn, delay } from '../../utils'
import { generatePassword } from './utils/generate-password'

const GeneratePasswordButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)

  const addons = useRecoilValue(addonsState)
  const passwordLength = useRecoilValue(passwordLengthState)
  const setPassword = useSetRecoilState(passwordState)
  const isAddonsEmpty = addons.length === 0

  const handleGeneratePassword = useCallback(async () => {
    if (isLoading || isAddonsEmpty) return
    setIsLoading(true)
    await delay(500) // 500 ms
    const password = generatePassword(addons, passwordLength)
    setPassword(password)
    setIsLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addons, isLoading, isAddonsEmpty, passwordLength])

  return (
    <button
      type='button'
      className={cn(
        'py-3 px-4 flex items-center rounded-full justify-center bg-purple-500 hover:bg-purple-500/90',
        'disabled:cursor-not-allowed disabled:bg-red-400/90',
        isLoading && 'w-[98.72px] h-12 cursor-not-allowed'
      )}
      onClick={handleGeneratePassword}
      disabled={isAddonsEmpty}
    >
      {isLoading ? <Grid color='#fff' width={20} /> : <span>Generate</span>}
    </button>
  )
}

export { GeneratePasswordButton }
