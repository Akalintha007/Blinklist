import React from 'react';
import { SvgIcon } from '@mui/material';
import {ReactComponent as clockImg} from './Economics.svg';



const EconomicsSvgIcon = (props:any) => {
    return (
        <SvgIcon component={clockImg}  inheritViewBox  fontSize='medium' />
    )
}

export default EconomicsSvgIcon