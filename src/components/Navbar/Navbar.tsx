import { FC } from 'react'
import {
  HelpIcon,
  Input,
  Logo,
  Menu,
  MenuButton,
  MenuButtonContainer,
  MenuItem,
  NavbarContainer,
} from './Navbar.styled'
import { NavbarProps } from './interfaces'
import bold from '../../assets/bold.svg'
import help from '../../assets/help.svg'

export const texts = { item1: 'Mi negocio', item2: 'Ayuda' }

const Navbar: FC<NavbarProps> = ({ dataTestId = 'navbar' }) => {
  return (
    <NavbarContainer data-testid={dataTestId}>
      <Logo src={bold} alt='Logo de Bold' />
      <Input />
      <MenuButtonContainer htmlFor='cb-toggle'>
        <MenuButton />
      </MenuButtonContainer>
      <Menu>
        <MenuItem>{texts.item1}</MenuItem>
        <MenuItem>
          {texts.item2} <HelpIcon src={help} alt='icon-help' />
        </MenuItem>
      </Menu>
    </NavbarContainer>
  )
}

export default Navbar
