import React from 'react';
import { SvgIcon } from '@mui/material';
import {ReactComponent as clockImg} from './Psychology.svg';



const PsychologySvgIcon = (props:any) => {
    return (
        <SvgIcon component={clockImg}  inheritViewBox  fontSize='medium' />
    )
}

export default PsychologySvgIcon