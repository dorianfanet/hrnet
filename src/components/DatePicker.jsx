import React, { useState, forwardRef } from 'react';
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
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
    background-color: white;
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

export default function DatePicker({ label, name, onChange }) {

  const [date, setDate] = useState(new Date())

  function handleOnChange(e) {
    setDate(e)
    onChange(e, name)
  }

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <Container  onClick={onClick} ref={ref}>
      <label>{label}</label>
      <input type='text' value={value} readOnly onFocus={onClick}></input>
    </Container>
  ));

  return (
    <ReactDatePicker 
      selected={date} 
      onChange={handleOnChange}       
      customInput={<ExampleCustomInput />}
    />
  );
}