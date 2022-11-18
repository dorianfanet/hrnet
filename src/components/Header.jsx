import styled from 'styled-components'
import logoWhite from '../assets/logo-white.svg'
import { Link, useResolvedPath, useMatch } from 'react-router-dom'

const HeaderContainer = styled.header`
  height: 70px;
  width: 100vw;
  background-color: var(--mainColor);

  & div.responsive{
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & div.logo-container{
      display: flex;
      align-items: center;

      & figure {
        margin: 0;
        display: grid;
        place-content: center;

        & img{
          height: 50px;
        }
      }

      & h1{
        color: var(--lightGreen);
        margin-left: 15px;
      }
    }
  }
`

const StyledLink = styled(Link)`
  border: 0;
  padding: .5em 1.5em;
  font-family: 'Lexend Deca', sans-serif;
  color: var(--mainColor);
  font-size: 16px;
  font-weight: 500;
  background-color: var(--lightGreen);
  border-radius: 5px;
  box-shadow: 0 4px 4px #1f5e117d;
  cursor: pointer;
  text-decoration: none;
  transition: all 200ms ease;

  &:hover{
    box-shadow: 0 5px 8px #1f5e11cd;
  }

  &.active{
    display: none;
  }
`

export default function Header() {
  return (
    <HeaderContainer>
      <div className='responsive'>
        <div className='logo-container'>
          <figure>
            <img src={logoWhite} alt="" />
          </figure>
          <h1>HRnet</h1>
        </div>
        <NavLink to='/employee-list'>View current employees</NavLink>
        <NavLink to='/'>Create employee</NavLink>
      </div>
    </HeaderContainer>
  )
}

function NavLink({ to, children }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <StyledLink
      to={to}
      className={isActive ? 'active' : ''}
    >
      {children}
    </StyledLink>
  )
}