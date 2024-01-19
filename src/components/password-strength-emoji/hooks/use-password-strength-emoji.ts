import { useEffect, useMemo, useState } from 'react'
import { useRecoilValue } from 'recoil'
import zxcvbn from 'zxcvbn'

import { passwordState } from '../../../recoil'

const EMOJI_SCORE = {
  0: '👎',
  1: '👎',
  2: '🥴',
  3: '😇',
  4: '💪'
}

const usePasswordStrengthEmoji = () => {
  const password = useRecoilValue(passwordState)

  const getStrengthEmoji = useMemo(() => {
    const { score } = zxcvbn(password)

    return EMOJI_SCORE[score]
  }, [password])

  const [strengthEmoji, setStrengthEmoji] = useState(EMOJI_SCORE[4])

  useEffect(() => {
    setStrengthEmoji(getStrengthEmoji)
  }, [getStrengthEmoji])

  return {
    strengthEmoji
  }
}

export { usePasswordStrengthEmoji }
