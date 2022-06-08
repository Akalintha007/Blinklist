import React from 'react';
import { SvgIcon } from '@mui/material';
import {ReactComponent as clockImg} from './PersonalDevelopment.svg';



const PersonalDevelopmentSvgIcon = (props:any) => {
    return (
        <SvgIcon component={clockImg}  inheritViewBox  fontSize='medium' />
    )
}

export default PersonalDevelopmentSvgIcon