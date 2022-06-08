import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import tabTheme from '../../../Themes/tabsTheme';
import { ThemeProvider } from '@mui/material/styles';
import { makeStyles} from '@mui/styles';
import {Theme } from'@mui/system'
import '@fontsource/roboto/400.css';

const useStyles = makeStyles((themes:Theme ) => ({
  // [themes.breakpoints.down('sm')]: {
     
  // },
  tabHead: {
    fontFamily:"Roboto",
    fontSize: '18px',
    linHeight:'23px',
    fontWeight:400,
    width: '304px'
},
}));
export default function TabsWrappedLabel({tabData, ...props}: any) {

  const classes = useStyles();
  const [value, setValue] = React.useState(tabData && tabData[0].value);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    props.stateHandler(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', width:'912px' }}>
      <ThemeProvider theme={tabTheme}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          autoCapitalize="none"
          indicatorColor= "secondary"
          data-testid='tabs'
        >
          {
            tabData.map((currTab:any) => {
              return (
                <Tab 
                key={currTab.id}
                value={currTab.value} 
                label={currTab.label} 
                data-testid={`tab-${currTab.value}`}   
                sx={{width: '304px', borderBottom: '2px solid #E1ECFC', alignItems: 'start', textTransform:'none'}}
                className={classes.tabHead}/>
              );
            })
          }
        </Tabs>
      </ThemeProvider>
    </Box>
  );
}