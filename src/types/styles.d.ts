/// <reference types="@emotion/react/types/css-prop" />
import { ThemeConfig } from '../styles/theme';
import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme extends ThemeConfig {}
}
