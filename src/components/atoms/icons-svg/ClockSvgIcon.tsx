import React from 'react';
import { SvgIcon } from '@mui/material';
import {ReactComponent as clockImg} from './timeicon.svg';



const ClockSvgIcon = (props:any) => {
    return (
        <SvgIcon component={clockImg}  inheritViewBox  fontSize='small' style={{marginTop:'5px'}}/>
    )
}

export default ClockSvgIcon