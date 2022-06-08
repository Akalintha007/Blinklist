import { createTheme } from "@mui/material";



export const Theme = createTheme({
  palette: {
    success:{
      main: '#2CE080',
    },
    primary: { 
      main: '#ffffff',
      contrastText: '#11cb5f'
    },
    background: {
      default: "#394764"
    }
  },
  typography: {
    
    h1:{
      fontFamily: 'Roboto',
      fontWeight: 600
    },
    h5: {
      fontFamily: 'Roboto',
      fontWeight: 600,
      fontSize: '33px'
    }
  }

});