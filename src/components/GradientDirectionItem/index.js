// Write your code here
import {ListItem, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {item, changeDirection, isActive} = props
  const {directionId, value, displayText} = item

  const selectDirection = () => {
    changeDirection(value)
  }

  return (
    <ListItem>
      <Button type="button" onClick={selectDirection} isActive={isActive}>
        {displayText}
      </Button>
    </ListItem>
  )
}

export default GradientDirectionItem
