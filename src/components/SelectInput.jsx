import styled from 'styled-components'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'

const SelectContainer = styled.div`
  display: flex;
    flex-direction: column;
    margin: 20px 0;

    & label{
      font-size: 18px;
      font-weight: 600;
      color: var(--mainColor);
      margin: 5px 0;
    }

    & > div{
      height: 40px;
      border: 2px solid var(--mainColor);
      background-color: white;
      border-radius: 5px;
      font-family: 'Lexend Deca', sans-serif;
      font-size: 18px;
      font-weight: 600;
      color: var(--mainColor);
      transition: all 200ms ease;

      &:hover{
        box-shadow: 0 4px 4px #ceeca464;
      }

      & > div{
        padding: .4em;
      }

      & svg{
        fill: var(--mainColor);
      }

      & fieldset{
        border: 0;
      }
    }
`

/**
 * Select component
 * @param {Array} dataset - List of entries to display in select
 * @param {String} valueName - Value of the entry
 * @param {String} dataName - Displayed name of the entry
 * @param {String} label - Label of the input
 * @param {String} inputName - Name of the input
 * @param {function} onChange - Handler for change of selected value
 */
export default function SelectInput({ dataset, valueName, dataName, label, inputName, onChange  }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(e.target.value, inputName)
  };

  return (
    <SelectContainer>
      <label>{label}</label>
      <Select
        value={value}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        {dataset.map((data) => 
          <MenuItem key={data[valueName]} value={data[valueName]}>{data[dataName]}</MenuItem>
        )}
      </Select>
    </SelectContainer>
  )
}