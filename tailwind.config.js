module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {

      height:{
         '1000px':'1000px',
         '220px':"220px",
         "350px":"350px"
      },
      width:{
        '300px':  "300px",
        '220px':"220px",
        "350px":"350px"
      },
      colors: {
        // transparent: 'transparent',
        // current: 'currentColor',
        // blue: '#1DA1F2',
        // lb: '#BBDFEA',
        // black: '#14171A',
        // tb: '#000000',
        // white: '#FFFFFF',
        // dg: '#657786',
        // 'light-gray': '#AAB8C2',
        // elg: '#E1E8ED',
        // eelg: '#F5F8FA',
        'tw-blue':'#1DA1F2',
        'dark-main':'#18191a',
        'dark-second':'#242526',
        'dark-third':'#3a3b3c',
        'tw-white':'#ffffff',
        'tw-border':'#657786',
        'fbw':"	#e4e6eb"
      },
     }
   },
   variants: {},
   plugins: [],
   darkMode: 'class',

 }