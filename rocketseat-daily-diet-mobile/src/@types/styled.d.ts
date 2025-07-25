import 'styled-components/native'
import { ITheme } from '../components/global.styles'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
