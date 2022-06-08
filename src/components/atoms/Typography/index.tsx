import React from 'react'
import {Typography} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import {Theme} from '../../../Themes/theme';
import mainTheme from '../../../Themes/main';


const TypographyComponents = (props:any) => {
    return (
        <ThemeProvider theme={mainTheme} >
        <Typography variant={props.variant1} mb={1} mt={1}   {...props} >
            {props.children}
        </Typography>
        </ThemeProvider>
    );
}

export default TypographyComponents;

