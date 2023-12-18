import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  height: 78px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: var(--header-bg);
  color: #fff;
  padding: 2rem 3rem;
`

export const Logo = styled.img`
  height: 100%;
`

export const Nav = styled.nav``

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;

  & > li {
    margin: 0 2rem;
    overflow: hidden;
    font-size: 24px;
  }

  @media (max-width: 700px) {
    position: absolute;
    top: 0;
    margin-top: 136px;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;

    & > li {
      display: flex;
      justify-content: center;
      margin: 0;
      padding: 0.5em 0;
      width: 100%;
      color: white;
      background: var(--header-bg);
    }
    & > li:not(:last-child) {
      border-bottom: 1px solid #444;
    }
  }
`

export const MenuItem = styled.li``

export const MenuButtonContainer = styled.label`
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    display: flex;
  }
`

export const MenuButton = styled.div`
  display: block;
  background-color: #fff;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
  &::before {
    display: block;
    background-color: #fff;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
    content: '';
    margin-top: -8px;
  }
  &::after {
    display: block;
    background-color: #fff;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
    content: '';
    margin-top: 8px;
  }
`

export const Input = styled.input.attrs({ id: 'cb-toggle', type: 'checkbox' })`
  display: none;
  &:checked + ${MenuButtonContainer} ${MenuButton}::before {
    margin-top: 0px;
    transform: rotate(405deg);
  }

  &:checked + ${MenuButtonContainer} ${MenuButton} {
    background: rgba(255, 255, 255, 0);
  }

  &:checked + ${MenuButtonContainer} ${MenuButton}::after {
    margin-top: 0px;
    transform: rotate(-405deg);
  }

  @media (max-width: 700px) {
    & ~ ${Menu} li {
      height: 0;
      margin: 0;
      padding: 0;
      border: 0;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    &:checked ~ ${Menu} li {
      border: 1px solid #333;
      height: 2.5em;
      padding: 0.5em;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
  }
`

export const HelpIcon = styled.img.attrs({
  alt: 'icon-help',
  className: 'icon-help',
})`
  width: 20px;
  margin-left: 10px;
`
