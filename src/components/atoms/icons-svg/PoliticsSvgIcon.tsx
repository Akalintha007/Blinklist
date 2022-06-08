import React from 'react';
import { SvgIcon } from '@mui/material';
import {ReactComponent as clockImg} from './Politics.svg';



const PoliticsSvgIcon = (props:any) => {
    return (
        <SvgIcon component={clockImg}  inheritViewBox  fontSize='medium' />
    )
}

export default PoliticsSvgIcon