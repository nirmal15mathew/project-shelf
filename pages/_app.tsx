import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../libs/layout'
import SettingContextWrapper from '../libs/components/SettingContext'
import useTheme from '../libs/hooks/useTheme'

function MyApp({ Component, pageProps }: AppProps) {
  const {theme, toggleTheme} = useTheme()

  // function toggleTheme() {
  //   if (theme == "dark") {
  //     setTheme("light")
  //   }
  //   else {
  //     setTheme("dark")
  //   }
  // }

  return (
    <SettingContextWrapper>
      <Layout currentTheme={theme} toggleTheme={toggleTheme}>
      <Component {...pageProps} />
    </Layout>
    </SettingContextWrapper>
  )
}

export default MyApp
