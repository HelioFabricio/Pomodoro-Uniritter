// arquivo de definição de tipos
import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// sobrescreve o styled-components (reaproveitando-o, pois foi importado na 1a linha):

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
