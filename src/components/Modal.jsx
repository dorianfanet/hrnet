import { useRef } from 'react'
import styled from 'styled-components'
import XMark from '../assets/XMark'
import useOnClickOutside from '../hooks/useOnClickOutside'

const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .4);
  backdrop-filter: blur(.2rem);

  & div.responsive{
    position: relative;
    height: 100%;
  }
`

const ModalBody = styled.div`
  max-width: 1024px;
  width: calc(100% - 90px);
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;

  & p{
    color: var(--mainColorDarker);
  }

  & div.icon{
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;

    & svg{
      height: 30px;
      fill: var(--mainColorDarker);
    }
  }
`

/**
 * Modal component
 * @param {String} content - Message displayed in the modal
 * @param {function} onClick - Handler for closing the modal 
 */
export default function Modal({ content, onClick }) {
  const ref = useRef()

  useOnClickOutside(ref, onClick)

  return (
    <ModalContainer>
      <div className='responsive'>
        <ModalBody ref={ref}>
          <p>{content}</p>
          <div className='icon' onClick={onClick}>
            <XMark />
          </div>
        </ModalBody>
      </div>
    </ModalContainer>
  )
}