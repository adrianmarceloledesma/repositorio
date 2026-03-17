import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      textLight: string;
      primary: string;
      accent: string;
      accentHover: string;
      border: string;
      cardBg: string;
    };
    fonts: {
      body: string;
      heading: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}