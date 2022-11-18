import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
  font-size: 18px;
  width: calc(100% - 4px);

  & label{
    font-size: 18px;
    font-weight: 600;
    color: var(--mainColor);
    margin: 5px 0;
  }

  & input{
    font-size: 18px;
    padding: .4em;
    width: calc(100% - .8em);
    border: 2px solid var(--mainColor);
    background-color: var(--lightGreen);
    border-radius: 5px;
    color: var(--mainColor);
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 600;
    transition: all 200ms ease;

    &.white{
      background-color: white;
    }

    &:focus-visible{
      outline: none;
      background-color: var(--lightGreen);
    }

    &:hover{
      box-shadow: 0 4px 4px #ceeca464;
    }
  }
`

export default function Input({ label, name, type, whiteBackground, onChange }){
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input className={whiteBackground ? 'white' : 'white'} id={name} type={type} onChange={onChange}/>
    </Container>
  )
}