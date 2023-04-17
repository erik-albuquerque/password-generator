import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import zxcvbn from 'zxcvbn'

import { passwordState } from '../recoil'

const PasswordStrengthEmoji = () => {
  const password = useRecoilValue(passwordState)

  const strengthEmojisScore = {
    0: '👎',
    1: '👎',
    2: '🥴',
    3: '😇',
    4: '💪'
  }

  const getStrengthEmoji = () => {
    const { score } = zxcvbn(password)

    return strengthEmojisScore[score]
  }

  const [strengthEmoji, setStrengthEmoji] = useState(strengthEmojisScore[4])

  useEffect(() => {
    setStrengthEmoji(getStrengthEmoji())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password])

  return <span>{strengthEmoji}</span>
}

export { PasswordStrengthEmoji }

