import React from 'react';
import { SvgIcon } from '@mui/material';
import {ReactComponent as clockImg} from './corporatecultureicon.svg';



const CorporateCultureSvgIcon = (props:any) => {
    return (
        <SvgIcon component={clockImg}  inheritViewBox  fontSize='medium' />
    )
}

export default CorporateCultureSvgIcon