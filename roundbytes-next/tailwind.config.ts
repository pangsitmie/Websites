import type { Config } from 'tailwindcss'

const ScreensConfig = require('./src/screen.config');

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      lg: { max: `${ScreensConfig.lg}px` },
      md: { max: `${ScreensConfig.md}px` },
      sm: { max: `${ScreensConfig.sm}px` },
      // this is the breakpoint used for the header only, to enhance the responsive layout.
      'header-breakpoint': { max: `${ScreensConfig['header-breakpoint']}px` },
    },
    // fontFamily: {
    //   Anonymous: 'Anonymous Pro',
    //   Roboto: 'roboto',
    //   Kanit: 'Kanit',
    //   RedHatMono: 'RedHatMono',
    //   ClashDisplay: 'ClashDisplay',
    //   DMSans: 'DMSans',
    // },
    colors: {
      transparent: 'transparent',
      white: "#FFF",
      black: "#050410",
      current: 'currentColor',
      yellow: '#FFD70D',
      melon: '#FF5372',
      merino: '#FFEAEC',
      mandy: '#DC4B5C',
      blue: {
        100: '#d9efff',
        200: '#bce3ff',
        300: '#8ed3ff',
        400: '#59b8ff',
        500: '#3C9EFF',
        600: '#1b7af5',
        700: '#1463e1',
        800: '#1750b6',
        900: '#19468f',
        DEFAULT: '#3C9EFF',
      },
      gray: {
        100: '#a3a3a3',
        80: '#444447',
        DEFAULT: '#a3a3a3',
      },
      'overlay-blue': {
        80: 'rgba(90, 83, 255, 0.8)',
        60: 'rgba(90, 83, 255, 0.6)',
        40: 'rgba(90, 83, 255, 0.4)',
        20: 'rgba(90, 83, 255, 0.2)',
        10: 'rgba(90, 83, 255, 0.1)',
        5: 'rgba(90, 83, 255, 0.05)',
      },
      'overlay-white': {
        100: 'rgba(255, 255, 255, 1)',
        80: 'rgba(255, 255, 255, 0.8)',
        60: 'rgba(255, 255, 255, 0.6)',
        40: 'rgba(255, 255, 255, 0.4)',
        20: 'rgba(255, 255, 255, 0.2)',
        10: 'rgba(255, 255, 255, 0.1)',
        5: 'rgba(255, 255, 255, 0.05)',
      },
      'overlay-black': {
        100: 'rgba(21, 21, 25, 1)',
        95: 'rgba(21, 21, 25, 0.95)',
        90: 'rgba(21, 21, 25, 0.9)',
        80: 'rgba(21, 21, 25, 0.8)',
        60: 'rgba(21, 21, 25, 0.6)',
        40: 'rgba(21, 21, 25, 0.4)',
        20: 'rgba(21, 21, 25, 0.2)',
        10: 'rgba(21, 21, 25, 0.1)',
        5: 'rgba(21, 21, 25, 0.05)',
      },
    },
    spacing: {
      0: '0px',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      4.5: '4.5px',
      5: '5px',
      6: '6px',
      7: '7px',
      8: '8px',
      9: '9px',
      10: '10px',
      11: '11px',
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      24: '24px',
      25: '25px',
      26: '26px',
      28: '28px',
      29: '29px',
      30: '30px',
      32: '32px',
      33: '33px',
      36: '36px',
      37: '37px',
      40: '40px',
      42: '42px',
      48: '48px',
      46: '46px',
      47: '47px',
      49: '49px',
      50: '50px',
      54: '54px',
      56: '56px',
      58: '58px',
      60: '60px',
      64: '64px',
      66: '66px',
      68: '68px',
      72: '72px',
      73: '73px',
      80: '80px',
      81: '81px',
      93: '93px',
      96: '96px',
      100: '100px',
      101: '101px',
      104: '104px',
      109: '109px',
      110: '110px',
      112: '112px',
      120: '120px',
      122: '122px',
      127: '127px',
      128: '128px',
      130: '130px',
      136: '136px',
      140: '140px',
      142: '142px',
      150: '150px',
      153: '153px',
      160: '160px',
      169: '169px',
      180: '180px',
      181: '181px',
      188: '188px',
      189: '189px',
      192: '192px',
      193: '193px',
      201: '201px',
      206: '206px',
      211: '211px',
      219: '219px',
      230: '230px',
      240: '240px',
      241: '241px',
      254: '254px',
      286: '286px',
      290: '290px',
      300: '300px',
      370: '370px',
      386: '386px',
      392: '392px',
      418: '418px',
      420: '420px',
      442: '442px',
      476: '476px',
      480: '480px',
      485: '485px',
      498: '498px',
      522: '522px',
      544: '544px',
      600: '600px',
      604: '604px',
      658: '658px',
      662: '662px',
      710: '710px',
      816: '816px',
      1028: '1028px',
      1440: '1440px',
      '31%': '31%',
    },
    boxShadow: {
      DEFAULT: '0px 0px 1px rgba(255, 255, 255, 0.45)',
      1: '0px 0px 2px rgba(0, 0, 0, 0.45)',
      2: '0px 2px 4px rgba(0, 0, 0, 0.45)',
      3: '0px 2px 8px rgba(0, 0, 0, 0.45)',
      4: '0px 2px 12px rgba(0, 0, 0, 0.45)',
      5: '0px 2px 16px rgba(0, 0, 0, 0.45)',
      border: '0px 0px 0px 4px rgba(28, 110, 232, 0.4)',
      modal: '0px 8px 10px rgba(0, 0, 0, 0.4)',
    },
    fontSize: {
      // old Typography System---------------------------------------
      'web-display': ['80px', { lineHeight: '120%', fontWeight: '600' }],
      'web-h0': ['86px', { lineHeight: '120%', fontWeight: '600' }],
      'web-h1': ['64px', { lineHeight: '120%', fontWeight: '600' }],
      'web-h2': ['48px', { lineHeight: '120%', fontWeight: '600' }],
      'web-h3': ['40px', { lineHeight: '120%', fontWeight: '600' }],
      'web-h4': ['22px', { lineHeight: '120%', fontWeight: '500' }],
      'web-button': ['16px', { lineHeight: '175%', fontWeight: '700' }],
      'web-subtitle-20': ['20px', { lineHeight: '120%', fontWeight: '500' }],
      'web-subtitle-18': ['18px', { lineHeight: '120%', fontWeight: '500' }],
      'web-subtitle-16': ['16px', { lineHeight: '120%', fontWeight: '500' }],
      'web-body-20': ['20px', { lineHeight: '175%', fontWeight: '400', letterSpacing: '-1.2px' }],
      'web-body-18': ['18px', { lineHeight: '175%', fontWeight: '400', letterSpacing: '-1.08px' }],
      'web-body-16': ['16px', { lineHeight: '175%', fontWeight: '400', letterSpacing: '-0.96px' }],
      'web-body-14': ['14px', { lineHeight: '175%', fontWeight: '400', letterSpacing: '-0.84px' }],
      'web-hyperlink-20': ['20px', { lineHeight: '175%', fontWeight: '500', letterSpacing: '-1.2px' }],
      'web-hyperlink-18': ['18px', { lineHeight: '175%', fontWeight: '500', letterSpacing: '-1.08p' }],
      'web-hyperlink-16': ['16px', { lineHeight: '175%', fontWeight: '500', letterSpacing: '-0.96px' }],
      'web-hyperlink-14': ['14px', { lineHeight: '175%', fontWeight: '500', letterSpacing: '-0.84px' }],

      'mobile-display': ['48px', { lineHeight: '120%', fontWeight: '600' }],
      'mobile-h1': ['32px', { lineHeight: '120%', fontWeight: '600' }],
      'mobile-h2': ['24px', { lineHeight: '120%', fontWeight: '600' }],
      'mobile-h3': ['18px', { lineHeight: '120%', fontWeight: '600' }],
      'mobile-h4': ['16px', { lineHeight: '120%', fontWeight: '600' }],
      'mobile-button': ['14px', { lineHeight: '175%', fontWeight: '700' }],
      'mobile-subtitle-18': ['18px', { lineHeight: '120%', fontWeight: '500' }],
      'mobile-subtitle-16': ['16px', { lineHeight: '120%', fontWeight: '500' }],
      'mobile-body-18': ['18px', { lineHeight: '175%', fontWeight: '400', letterSpacing: '-1.08px' }],
      'mobile-body-16': ['16px', { lineHeight: '175%', fontWeight: '400', letterSpacing: '-0.96px' }],
      'mobile-body-14': ['14px', { lineHeight: '175%', fontWeight: '400', letterSpacing: '-0.84px' }],
      'mobile-hyperlink-18': ['18px', { lineHeight: '175%', fontWeight: '500', letterSpacing: '-1.08px' }],
      'mobile-hyperlink-14': ['14px', { lineHeight: '175%', fontWeight: '500', letterSpacing: '-0.84px' }],
      'mobile-hyperlink-12': ['12px', { lineHeight: '175%', fontWeight: '500', letterSpacing: '-0.72px' }],
      // end of new Typography System---------------------------------------
    },
    minWidth: {
      0: '0',
      16: '16px',
      full: '100%',
    },
    minHeight: {
      64: '64px',
      full: '100%',
    },
    maxWidth: {
      80: '80px',
      370: '370px',
      392: '392px',
      480: '480px',
      498: '498px',
      600: '600px',
      604: '604px',
      662: '662px',
      710: '710px',
      816: '816px',
      1028: '1028px',
      1440: '1440px',
      2164: '2164px',
      full: '100%',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
    },
    borderRadius: {
      none: '0px',
      DEFAULT: '3px',
      1: '1px',
      2: '2px',
      3: '3px',
      5: '5px',
      7: '7px',
      8: '8px',
      10: '10px',
      16: '16px',
      20: '20px',
      60: '60px',
      100: '100px',
      55: '55px',
      circle: '50%',
    },
    transitionDuration: {
      300: '300ms',
      400: '400ms',
      500: '500ms',
      1000: '1000ms',
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
      crosshair: 'crosshair',
      'zoom-in': 'zoom-in',
      'col-resize': 'col-resize',
    },
    extend: {
      outline: {
        border: ['1px solid #FFFFFF', '-1px'],
        outer: ['2px solid #1C6EE8', '2px'],
      },
      width: {
        fit: 'fit-content',
      },
      textUnderlineOffset: {
        6: '6px',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['group-focus', 'active'],
      backgroundColor: ['group-hover', 'hover', 'focus-within', 'focus', 'active', 'disabled'],
      translate: ['group-hover'],
      padding: ['first', 'last', 'focus', 'focus-visible'],
      borderRadius: ['first', 'last'],
      display: ['group-hover', 'group-focus'],
      outline: ['focus'],
      opacity: ['group-focus', 'disabled', 'active'],
      margin: ['first'],
      borderWidth: ['first', 'focus', 'focus-visible'],
      scale: ['group-hover, hover'],
      borderColor: ['focus-visible'],
      justifyContent: ['hover', 'focus'],
      boxShadow: ['focus-visible'],
      width: ['group-hover'],
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    // require('@tailwindcss/line-clamp'),
  ],
};

export default config


// const config: Config = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         "gray-20": "#F8F4EB",
//         "gray-50": "#EFE6E6",
//         "gray-100": "#DFCCCC",
//         "white": "#FFF",
//         "black": "#111",
//         "background": "#111",
//         "primary-100": "#3C9EFF",
//         "primary-300": "#EEEEEE",
//         "secondary-100": "#1B1B1B",
//         "secondary-300": "#FFC132",
//       },
//       borderRadius: {
//         'circle': '50%',
//       },
//       content: {
//         evolvetext: "url('./assets/EvolveText.png')",
//         abstractwaves: "url('./assets/AbstractWaves.png')",
//         sparkles: "url('./assets/Sparkles.png')",
//         circles: "url('./assets/Circles.png')",
//       },
//     },
//     fontSize: {
//       'h0': ['6rem', { lineHeight: '1.25', fontWeight: '600' }],
//       'mobile-h0': ['10vw', { lineHeight: '1.25', fontWeight: '600' }],
//       'h1': ['5rem', { lineHeight: '1.2', fontWeight: 'bold' }],
//       'mobile-h1': ['9vw', { lineHeight: '1.2', fontWeight: 'bold' }],
//       'h2': ['3.5rem', { lineHeight: '1.2', fontWeight: '500' }],
//       'mobile-h2': ['7vw', { lineHeight: '1.2', fontWeight: '500' }],
//       'h3': ['2.8rem', { lineHeight: '1.4' }],
//       'mobile-h3': ['6vw', { lineHeight: '1.4' }],
//       'h4': ['1.8rem', { lineHeight: '1.4' }],
//       'mobile-h4': ['1.2rem', { lineHeight: '1.4' }],
//       'p': ['1.1rem', { lineHeight: '1.4' }],
//     },
//     screens: {
//       xs: "480px",
//       sm: "768px",
//       md: "1060px",
//     },
//   },
//   plugins: [],
// }
// export default config
