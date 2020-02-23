import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { ThemeType } from '../utils/theme'
import { Theme } from './Providers'


type ToggleSwitchProps = {
  changeThemeByName: (theme: Theme) => void;
  currentTheme: Theme;
}

type BallProps = {
  isOn: boolean;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: auto;
`

const ThemeText = styled.p`
  color: ${(p: ThemeType) => p.theme.text.secondary};
  margin: 0 5px;
  font-size: 12px;
`

const BallContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  width: 45px;
  height: 20px;
  background-color: ${(p: ThemeType) => p.theme.bg.input};
  padding: 2px;
`

const Ball = styled(motion.div)`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(p: BallProps) => p.isOn ? 'aquamarine' : 'hotpink'}
`

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ changeThemeByName, currentTheme }) => {
  const [isOn, toggleOnOff] = React.useState(true)

  const flipSwitch = () => {
    toggleOnOff(!isOn)
    changeThemeByName(!isOn ? 'light' : 'dark')
  }

  // animations
  const variants = {
    on: { marginLeft: 0 },
    off: { marginLeft: 30 }
  }

  return (
    <Container>
      <ThemeText>{isOn ? 'Light' : 'Dark'}</ThemeText>
      <BallContainer onClick={flipSwitch}>
        <Ball
          variants={variants}
          animate={isOn ? "on" : "off"}
          isOn={isOn}
        />
      </BallContainer>
    </Container>
  )
}

export default ToggleSwitch;
