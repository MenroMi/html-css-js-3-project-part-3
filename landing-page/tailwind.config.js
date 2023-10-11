/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1800px',
      },
      padding: {
        section: '144px',
      },
      colors: {
        'intro-email-sign': 'var(--clr-intro-email-sign-bgc)',
        main: 'var(--clr-main-bgc)',
        footer: 'var(--clr-footer-bgc)',
        testimonial: 'var(--clr-testimonial-bgc)',
        cyan: 'var(--clr-cyan)',
        blue: 'var(--clr-blue)',
        'red-light': 'var(--clr-red-light)',
        white: 'var(--clr-white)',
        DEFAULT: 'var(--clr-white)',
      },
      fontSize: {
        DEFAULT: 'var(--default-txt-size)',
        'header-heading': 'var(--header-heading)',
        'header-p': 'var(--header-card-p)',
        'card-heading': 'var(--card-heading)',
        'card-p': 'var(--card-p)',
        'how-works-heading': 'var(--how-works-sec-heading)',
        'how-works-p': 'var(--how-works-sec-p)',
        comment: 'var(--comment)',
      },
      fontFamily: {
        raleway: 'var(--raleway-family)',
        'open-sans': 'var(--open-sans-family)',
      },
      zIndex: {
        '-1': '-1',
      },
      boxShadow: {
        testim: '0px 5px 3px 0px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
};
