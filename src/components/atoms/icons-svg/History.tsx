import React from 'react';
import { SvgIcon } from '@mui/material';
import {ReactComponent as clockImg} from './History.svg';



const HistorySvgIcon = (props:any) => {
    return (
        <SvgIcon component={clockImg}  inheritViewBox  fontSize='medium' />
    )
}

export default HistorySvgIcon