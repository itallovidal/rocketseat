import 'styled-components'
import {lightTheme} from "./theme.ts";

type ThemeType = typeof lightTheme

declare module 'styled-components'{
    export interface DefaultTheme extends ThemeType{}
}