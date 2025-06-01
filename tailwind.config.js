/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./App.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontSize: {
        display1: ['28px', {lineHeight: '42px'}],
        head1: ['24px', {lineHeight: '36px'}],
        head2: ['20px', {lineHeight: '30px'}, {letterSpacing: '-1.5%'}],
        title1: ['18px', {lineHeight: '27px'}, {letterSpacing: '-1.5%'}],
        label1: ['16px', {lineHeight: '24px'}, {letterSpacing: '-1.5%'}],
        body1: ['15px', {lineHeight: '23px'}, {letterSpacing: '-1.5%'}],
        body2: ['14px', {lineHeight: '21px'}, {letterSpacing: '-1.5%'}],
        caption1: ['12px', {lineHeight: '18px'}, {letterSpacing: '-1.5%'}],
      },
    },
  },
  plugins: [],
};
