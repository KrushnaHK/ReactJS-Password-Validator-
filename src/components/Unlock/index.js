// Write your code here
import {useState} from 'react'

import {MainContainer, LockImage, Text, LockButton} from './styledComponents'

const Unlock = () => {
  const [isUnlocked, setIsUnlocked] = useState(false)

  const imageUrl = isUnlocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const text = isUnlocked ? 'Your Device is Unlocked' : 'Your Device is Locked'
  const buttonText = isUnlocked ? 'Lock' : 'Unlock'
  const altText = isUnlocked ? 'unlock' : 'lock'

  const onClickButton = () => setIsUnlocked(prevStatus => !prevStatus)

  return (
    <MainContainer>
      <LockImage src={imageUrl} alt={altText} />
      <Text>{text}</Text>
      <LockButton type="button" onClick={onClickButton}>
        {buttonText}
      </LockButton>
    </MainContainer>
  )
}
export default Unlock
