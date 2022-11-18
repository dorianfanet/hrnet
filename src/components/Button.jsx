import styled from 'styled-components'

const StyledButton = styled.button`
  margin: 10px 0;
  border: 0;
  padding: .5em 3em;
  font-family: 'Lexend Deca', sans-serif;
  color: var(--lightGreen);
  font-size: 16px;
  font-weight: 500;
  background-color: var(--mainColor);
  border-radius: 5px;
  box-shadow: 0 4px 4px #48954da0;
  cursor: pointer;
  transition: all 200ms ease;

  &:hover{
    box-shadow: 0 5px 8px #38743cb0;
  }
`

export default function Button({ title, type, onClick }) {
  return (
    <StyledButton type={type} onClick={onClick}>{title}</StyledButton>
  )
}