import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorContainer,
  AppHeading,
  GradientsList,
  ColorsContainer,
  EachColorContainer,
  ColorHexCode,
  GenerateButton,
  AppPara,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    selectedDirection: gradientDirectionsList[0].value,
    value1: '#8ae323',
    value2: '#014f7b',
  }

  onChangingColor1 = event => {
    this.setState({value1: event.target.value})
  }

  onChangingColor2 = event => {
    this.setState({value2: event.target.value})
  }

  changeDirection = direction => {
    this.setState({selectedDirection: direction})
  }

  handleGenerate = () => {
    const {selectedDirection, value1, value2} = this.state
    const direction = `to ${selectedDirection}`
    document.body.style.background = `linear-gradient(${direction}, ${value1}, ${value2})`
  }

  render() {
    const {selectedDirection, value1, value2} = this.state

    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        color1={value1}
        color2={value2}
        direction={`to ${selectedDirection}`}
      >
        <AppHeading>Generate a CSS Color Gradient</AppHeading>
        <AppPara>Choose Direction</AppPara>
        <GradientsList>
          {gradientDirectionsList.map(Item => (
            <GradientDirectionItem
              key={Item.directionId}
              item={Item}
              isActive={Item.value === selectedDirection}
              changeDirection={this.changeDirection}
            />
          ))}
        </GradientsList>
        <AppPara>Pick the Colors</AppPara>
        <ColorsContainer>
          <EachColorContainer>
            <ColorHexCode>{value1}</ColorHexCode>
            <input
              type="color"
              value={value1}
              onChange={this.onChangingColor1}
            />
          </EachColorContainer>
          <EachColorContainer>
            <ColorHexCode>{value2}</ColorHexCode>
            <input
              type="color"
              value={value2}
              onChange={this.onChangingColor2}
            />
          </EachColorContainer>
        </ColorsContainer>
        <GenerateButton type="button" onClick={this.handleGenerate}>
          Generate
        </GenerateButton>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
