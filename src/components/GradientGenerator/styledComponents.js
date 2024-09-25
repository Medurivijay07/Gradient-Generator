// Style your elements here
import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(${props =>
    `${props.direction}, ${props.color1}, ${props.color2}`});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const AppHeading = styled.h1`
  color: #ededed;
  font-family: 'Roboto';
`
export const AppPara = styled.p`
  color: #ededed;
  font-family: 'Roboto';
`

export const GradientsList = styled.ul`
  display: flex;
  list-style-type: none;
`
export const ColorsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const EachColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
`
export const ColorHexCode = styled.p`
  color: #ededed;
`
export const GenerateButton = styled.button`
  background-color: #00c9b7;
  border: none;
  border-radius: 7px;
  color: #1e293b;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
  cursor: pointer;
  outline: none;
`
