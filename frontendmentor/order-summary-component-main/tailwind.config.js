module.exports = {
    content: ['./*.html', ],
    theme: {
      extend: {
        colors:{
          blue: {
            "pale": "hsl(225, 100%, 98%)",
            "very-pale": "hsl(225, 100%, 98%)",
            "dark": "hsl(223, 47%, 23%)",
            "desaturated": "hsl(224, 23%, 55%)",
            "bright": "hsl(245, 75%, 52%)"
          }
        },
        fontFamily: {
          nunito:['Nunito'],
          redHatDisplay:['Red Hat Display']
        }
      },
    },
    plugins: [],
  }