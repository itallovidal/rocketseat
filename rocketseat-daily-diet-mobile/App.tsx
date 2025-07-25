import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { theme } from './src/components/global.styles'
import { AppRoutes } from './src/routes'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <View style={{ flex: 1, paddingTop: 24 }}>
        <AppRoutes />
      </View>
    </ThemeProvider>
  )
}
