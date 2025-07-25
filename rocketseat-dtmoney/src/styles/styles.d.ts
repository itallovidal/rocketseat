import 'styled-components'
import {darkTheme} from "./theme";

type MyTheme = typeof darkTheme

declare module 'styled-components' {
    export interface DefaultTheme extends MyTheme{}
}