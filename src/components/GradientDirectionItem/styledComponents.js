// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  margin-right: 30px;
`
export const Button = styled.button`
  opacity: ${props => (props.isActive ? '1' : '0.5')};
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  
`
