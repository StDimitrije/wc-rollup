module.exports = {
  content: ["./src/*.{html,js,css}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#1F4971',
        'primary-light': '#29537B',
        'primary-dark': '#153F67',
        'powder-blue': '#7DC0FF',
        'powder-blue-2': '#77b8f4',
        'secondary-blue': '#1C4A71',
        'secondary-grey': '#444545',
        'tertiary-yellow': '#FAF5ED',
        'tertiary-light-grey': '#F4F4F8',
        'tertiary-medium-grey': '#959AA1',
        'accent': '#90C058',
        'accent-light': '#9ACA62',
        'accent-dark': '#86B64E',
        'accent-15': '#90C05826',
        'dark-1': '#273543',
        'dark-2': '#444545',
        'dark-3': '#13212F',
        'dark-4': '#202B38',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ]
}