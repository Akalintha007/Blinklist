import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const tabsTheme = createTheme({
    palette: {
      secondary: { 
        main: '#2CE080'
      }
    },
    components: { 
      MuiTab: 
        { styleOverrides:  
          { root: 
            { 
              alignItems: 'flex-start !important',
              "&.Mui-selected": { 
                fontFamily:"Roboto",
                color: '#2CE080',
                fontSize: '18px',
                fontWeight: 700,
                lineHeight: '23px',
                weight: '400',
                borderBottom: '2px solid #2CE080',
                padding: '0px'
              }
            } 
          } 
        } 
    } 
});

export default tabsTheme;