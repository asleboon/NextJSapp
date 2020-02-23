import React from 'react'
import styled from 'styled-components'
import { ThemeType } from '../utils/theme'
import ToggleSwitch from './ToggleSwitch'
import Link from 'next/link'
import { Theme } from './Providers'

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  background-color: ${(p: ThemeType) => p.theme.bg.primary};
  padding-left: 10px;
  padding-right: 10px;
`

const PageTitle = styled.a`
  font-size: 20px;
  color: ${(p: ThemeType) => p.theme.text.primary};
  :hover {
    cursor: pointer;
  }
`

const Footer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  height: 2.5em;
  background-color: ${(p: ThemeType) => p.theme.bg.primary};
  width: 100%;
`

type LayoutProps = {
  title: string;
  children: React.ReactChildren;
  currentTheme: Theme;
  changeThemeByName: (theme: Theme) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, changeThemeByName, currentTheme, title }) => {
  return (
    <Container>
      <Header>
        <Link href="/">
          <PageTitle>{title}</PageTitle>
        </Link>
        <ToggleSwitch changeThemeByName={changeThemeByName} currentTheme={currentTheme} />
      </Header>
      {children}
      <Footer>
        <button onClick={() => changeThemeByName('lyse')}>DON'T!</button>
      </Footer>
    </Container>
  )
}

export default Layout
