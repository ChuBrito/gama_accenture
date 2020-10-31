import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#115D8C',
    },
    secondary: {
        main: '#F25D27',
        contrastText: '#F1F1F1',
    },
    text:{
        primary:'#123952',
        secondary: '#617480',
        hint: '#A0ACB2',
    }
  },
  typography:{
      h1:{
        fontFamily:'Barlow',
        fontSize: '2rem'
      },
      h2:{
        fontFamily: 'Barlow',
        fontSize: '1.5rem'
      },
      body1:{
        fontFamily: 'Heebo',
        font: '1rem'
      },
      body2:{
        fontFamily:'Heebo',
        fontSize: '0.8rem'
      },
  }
});

export default theme;