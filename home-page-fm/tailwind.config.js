/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        primary: {
          orange: 'var(--clr-primary-orange)',
          red: 'var(--clr-primary-red)',
        },
        neutral: {
          'off-white': 'var(--clr-off-white)',
          'grayish-blue': 'var(--clr-grayish-blue)',
          'dark-grayish-blue': 'var(--clr-dark-grayish-blue)',
          'very-dark-blue': 'var(--clr-very-dark-blue)',
        },
      },
      gridTemplateColumns: {
        19: 'grid-template-columns: repeat(19, 1fr)',
      },
      keyframes: {
        visible: {
          '0%': {width: '0%'},
          '100%': {width: '100%'},
        },
        'burger-on': {
          '0%': {
            width: '0',
          },
          '70%': {
            width: '70%',
          },
        },
        'burger-off': {
          '70%': {
            width: '70%',
          },
          '0%': {
            width: '0%',
          },
        },
      },
      animation: {
        visible: 'visible 300ms ease-in-out forwards',
        'bgr-menu': 'burger-on 300ms ease-in forwards, burger-off',
      },
      fontSize: {
        title: 'var(--fs-title)',
        descr: 'var(--fs-description)',
      },
      backgroundColor: {
        overlay: 'var(--bg-overlay)',
      },
      width: {
        'bgr-line': '32px',
      },
      height: {
        'bgr-line': '4px',
      },
      transformOrigin: {
        bgr: '5px 0px',
        '0%': '0% 0%',
        'y-100%': '0 100%',
      },
      rotate: {
        '45d': '45deg',
      },
      scale: {
        bgr: '0.2',
      },
      translate: {
        bgr: '-2px -1px',
        'bgr-line-2': '0, -1px',
      },
      spacing: {
        '300px': '300px',
        '50px': '50px',
        '40px': '40px',
        '32px': '32px',
        '7px': '7px',
        '5px': '5px',
        '2px': '2px',
        '1px': '1px',
      },
    },
  },
  plugins: [],
};
