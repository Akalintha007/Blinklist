import React from 'react';
import { SvgIcon } from '@mui/material';
import {ReactComponent as clockImg} from './Plus.svg';



const PlusSvgIcon = (props:any) => {
    return (
        <SvgIcon component={clockImg}  inheritViewBox  fontSize='medium' />
    )
}

export default PlusSvgIcon