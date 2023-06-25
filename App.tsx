import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { TamaguiProvider, Theme } from 'tamagui'

import config from './tamagui.config'
import Routes from './src/routes/Routes'

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Regular.otf'),
    InterMedium: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    InterExtraBold: require('@tamagui/font-inter/otf/Inter-ExtraBold.otf'),
  })
  if (!loaded) {
    return null
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name='dark'>
        <StatusBar style="light" backgroundColor='#2A4054' />
        <Routes />
      </Theme>
    </TamaguiProvider>
  )
}