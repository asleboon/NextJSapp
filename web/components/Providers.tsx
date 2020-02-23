

import React, { useState } from 'react'
import { lightTheme, darkTheme, lyseTheme } from './../utils/theme';
import { ThemeProvider } from 'styled-components'
import Layout from '../components/Layout';

export type Theme = 'dark' | 'light' | 'lyse';

const getThemeByName = (theme: Theme) => {
  switch (theme) {
    case 'light': return lightTheme
    case 'dark': return darkTheme
    case 'lyse': return lyseTheme
    default: return lightTheme
  }
}

export default ({ children }: any) => {
  const [currentTheme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = React.useState(false)
  const theme = getThemeByName(currentTheme);

  const changeThemeByName = (newTheme: Theme) => {
    setTheme(newTheme)
  }


  React.useEffect(() => {
    setMounted(true)
  }, [])

  const body =
    <ThemeProvider theme={theme}>
      <Layout title="Lyse" changeThemeByName={changeThemeByName} currentTheme={currentTheme}>
        {children}
      </Layout>
    </ThemeProvider>

  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>
  }

  return body
}

