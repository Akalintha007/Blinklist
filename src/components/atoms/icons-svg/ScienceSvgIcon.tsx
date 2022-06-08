import React from 'react';
import { SvgIcon } from '@mui/material';
import {ReactComponent as clockImg} from './Science.svg';



const ScienceSvgIcon = (props:any) => {
    return (
        <SvgIcon component={clockImg}  inheritViewBox  fontSize='medium' />
    )
}

export default ScienceSvgIcon