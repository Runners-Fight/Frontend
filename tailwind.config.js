/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./App.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontSize: {
        'display1-bold': ['28px', {lineHeight: '42px'}, {fontWeight: '700'}],
        'display1-medium': ['28px', {lineHeight: '42px'}, {fontWeight: '500'}],
        'head1-bold': ['24px', {lineHeight: '36px'}, {fontWeight: '700'}],
        'head1-medium': ['24px', {lineHeight: '36px'}, {fontWeight: '500'}],
        'head1-regular': ['24px', {lineHeight: '36px'}, {fontWeight: '400'}],
        'head2-bold': [
          '20px',
          {lineHeight: '30px'},
          {letterSpacing: '-1.5%'},
          {fontWeight: '700'},
        ],
        'head2-medium': [
          '20px',
          {lineHeight: '30px'},
          {letterSpacing: '-1.5%'},
          {fontWeight: '500'},
        ],
        'head2-regular': [
          '20px',
          {lineHeight: '30px'},
          {letterSpacing: '-1.5%'},
          {fontWeight: '400'},
        ],
        'title1-bold': [
          '18px',
          {lineHeight: '27px'},
          {letterSpacing: '-1.5%'},
          {fontWeight: '700'},
        ],
        'title1-medium': [
          '18px',
          {lineHeight: '27px'},
          {letterSpacing: '-1.5%'},
          {fontWeight: '500'},
        ],
        'title1-regular': [
          '18px',
          {lineHeight: '27px'},
          {letterSpacing: '-1.5%'},
          {fontWeight: '400'},
        ],
        'label1-bold': [
          '16px',
          {lineHeight: '24px'},
          {letterSpacing: '-1.5%'},
          {fontWeight: '700'},
        ],
        'label1-medium': [
          '16px',
          {lineHeight: '24px'},
          {letterSpacing: '-1.5%'},
          {fontWeight: '500'},
        ],
        'label1-regular': [
          '16px',
          {lineHeight: '24px'},
          {letterSpacing: '-1.5%'},
          {fontWeight: '400'},
        ],
        'body1-bold': [
          '15px',
          {lineHeight: '23px'},
          {letterSpacing: '-1.5%'},
          {fontWeight: '700'},
        ],
        'body1-medium': [
          '15px',
          {lineHeight: '23px'},
          {letterSpacing: '-1.5%'},
          {fontWeight: '500'},
        ],
        'body1-regular': [
          '15px',
          {lineHeight: '23px'},
          {letterSpacing: '-1.5%'},
          {fontWeight: '400'},
        ],
        'body2-bold': [
          '14px',
          {lineHeight: '21px'},
          {letterSpacing: '-1.5%'},
          {fontWeight: '700'},
        ],
        'body2-medium': [
          '14px',
          {lineHeight: '21px'},
          {letterSpacing: '-1.5%'},
          {fontWeight: '500'},
        ],
        'body2-regular': [
          '14px',
          {lineHeight: '21px'},
          {letterSpacing: '-1.5%'},
          {fontWeight: '400'},
        ],
        'caption1-bold': [
          '12px',
          {lineHeight: '18px'},
          {letterSpacing: '-1.5%'},
          {fontWeight: '700'},
        ],
        'caption1-medium': [
          '12px',
          {lineHeight: '18px'},
          {letterSpacing: '-1.5%'},
          {fontWeight: '500'},
        ],
        'caption1-regular': [
          '12px',
          {lineHeight: '18px'},
          {letterSpacing: '-1.5%'},
          {fontWeight: '400'},
        ],
      },
    },
  },
  plugins: [],
};
