import { rgba } from 'polished';

const theme = {
  colors: {
    black: '#000000',
    black10: 'rgba(0, 0, 0, 0.1)',
    black12: 'rgba(0, 0, 0, 0.12)',
    black15: 'rgba(0, 0, 0, 0.15)',
    black70: 'rgba(0, 0, 0, 0.70)',
    black85: 'rgba(0, 0, 0, 0.85)',
    gray: '#ebe9e4',
    gray0: '#212120',
    gray1: '#323232',
    gray2: '#4a4948',
    gray3: '#575654',
    gray4: '#6e6d6b',
    gray5: '#82817f',
    gray6: '#969592',
    gray7: '#d8d8d8',
    gray8: '#d5d5d5',
    gray9: '#373737',
    gray80: 'rgba(74, 73, 72, 0.8)',
    grayDark: '#d5d3cf',
    grayDarkDisabled: 'rgba(74, 73, 72, 0.5)',
    grayDarker: '#969592',
    grayDisabled: 'rgba(235, 233, 228, 0.5)',
    grayHover: '#d5d3cf',
    grayLight: rgba('#4a4948', 0.5),
    grayLighter: rgba('#ebe9e4', 0.5),
    white: '#ffffff',
    white80: 'rgba(255, 255, 255, 0.8)',
    whiteDisabled: 'rgba(255, 255, 255, 0.75)',
    whiteLight: rgba('#ffffff', 0.75),
  },

  fontFamilies: {
    base: "'Inter', sans-serif",
    secondary: "'Playfair Display', serif"
  },

  fontSizes: {
    base: '16px',
    baseSmall: '14px',
    h1: {
      mobile: '72px',
      desktop: '104px',
    },
    h2: {
      mobile: '58px',
      desktop: '64px',
    },
    h3: {
      mobile: '40px',
      desktop: '40px',
    },
    h4: {
      mobile: '21px',
      desktop: '25px',
    },
    h5: {
      mobile: '11px',
      desktop: '11px',
    },
    h6: {
      mobile: '11px',
      desktop: '11px',
    },
  },

  lineHeights: {
    base: '22px',
    baseSmall: '20px',
    baseHeader: '18px',
    h1: {
      mobile: '58px',
      desktop: '85px',
    },
    h2: {
      mobile: '51px',
      desktop: '55px',
    },
    h3: {
      mobile: '59px',
      desktop: '59px',
    },
    h4: {
      mobile: '21px',
      desktop: '21px',
    },
    h5: {
      mobile: '12px',
      desktop: '12px',
    },
    h6: {
      mobile: '15px',
      desktop: '15px',
    },
  },
  borderRadius: '20px',
  breakpoints: {
    xxSmall: '320px',
    s22: '360px',
    xSmall: '375px',
    small: '430px',
    medium: '768px',
    storybookTablet: '834px',
    large: '1024px',
    large720p: '1280px',
    xLarge: '1440px',
    xLarge1080p: '1920px',
    xxLarge: '2560px',
  },
};

export default theme;