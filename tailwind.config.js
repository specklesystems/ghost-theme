module.exports = {
  purge: [
    './*.hbs',
    './partials/**/*.hbs'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      height: theme => ({
        'screen/2': '50vh',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)',
        'screen/2-3': 'calc(100vh * 0.66)',
      })
    },
    fontFamily: {
      sans: ['Space Grotesk', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
