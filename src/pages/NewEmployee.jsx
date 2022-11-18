import styled from 'styled-components'
import Input from '../components/Input'
import Button from '../components/Button'
import { states } from '../data/selectInputsData.js'
import { departments } from '../data/selectInputsData.js'
import SelectInput from '../components/SelectInput'
import DatePicker from '../components/DatePicker'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setNewEmployee } from '../store/store'
import Modal from '../components/Modal'

const Form = styled.form`

  & section{
    display: flex;
    justify-content: space-between;
    width: 100%;

    & div.input-container{
      width: 40%;
    }
  }

  & div.address{
    margin: 20px 0;
    background-color: var(--lightGreen);
    padding: 20px;

    & h3{
      font-size: 28px;
      font-weight: 600;
      margin: 0 0 10px 0;
      color: var(--mainColor);
    }
  }

  & div.button-container{
    width: 100%;
    display: grid;
    place-content: center;
  }
`

export default function NewEmployee() {

  const dispatch = useDispatch()

  const initialState = {
    firstname: '',
    lastname: '',
    birthdate: new Date(),
    street: '',
    city: '',
    state: '',
    zipcode: '',
    startDay: new Date(),
    department: ''
  }

  const [formData, setFormData] = useState(initialState)

  function handleInputChange(e, inputName){
    if(e.target){
      setFormData({
        ...formData,
        [e.target.id]: e.target.value
      })
    } else {
      setFormData({
        ...formData,
        [inputName]: e
      })
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(formData)
    dispatch(setNewEmployee(formData))
    setModalState(!modalState)
  }

  const [modalState, setModalState] = useState(false)

  function handleModal() {
    setModalState(!modalState)
  }

  return (
    <div className='responsive'>
      <h1 className='page-title'>Create employee</h1>
      <Form>
        <section className='main-info'>
          <div className='user-name input-container'>
            <Input
              type='text'
              label='First name'
              name='firstname'
              onChange={handleInputChange}
            />
            <Input
              type='text'
              label='Last name'
              name='lastname'
              onChange={handleInputChange}
            />
          </div>
          <div className='input-container'>
          <DatePicker
            label='Date of birth'
            name='birthdate'
            onChange={handleInputChange}
          />
          </div>
        </section>
        <div className='address'>
          <h3>Address</h3>
          <section>
            <div className='input-container'>
              <Input
                type='text'
                label='Street'
                name='street'
                whiteBackground='true'
                onChange={handleInputChange}
              />
              <Input
                type='text'
                label='City'
                name='city'
                whiteBackground='true'
                onChange={handleInputChange}
              />
            </div>
            <div className='input-container'>
              <SelectInput
                dataset={states}
                valueName='abbreviation'
                dataName='name'
                label='State'
                inputName='state'
                onChange={handleInputChange}
              />
              <Input
                type='number'
                label='Zipcode'
                name='zipcode'
                whiteBackground='true'
                onChange={handleInputChange}
              />
            </div>
          </section>
        </div>
        <section>
          <div className='input-container'>
            <DatePicker
              label='Start day'
              name='startdate'
              onChange={handleInputChange}
            />
          </div>
          <div className='input-container'>
            <SelectInput
              dataset={departments}
              valueName='name'
              dataName='name'
              label='Department'
              inputName='department'
              onChange={handleInputChange}
            />
          </div>
        </section>
        <div className='button-container'>
          <Button
            title='Save'
            type='submit'
            onClick={handleSubmit}
          />
        </div>
      </Form>
      {modalState && (
        <Modal
          content='New employee created!'
          onClick={handleModal}
        />
      )}
    </div>
  )
}