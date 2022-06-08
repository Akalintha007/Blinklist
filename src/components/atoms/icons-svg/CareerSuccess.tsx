import React from 'react';
import { SvgIcon } from '@mui/material';
import {ReactComponent as clockImg} from './CareerSuccess.svg';



const CareerSuccessSvgIcon = (props:any) => {
    return (
        <SvgIcon component={clockImg}  inheritViewBox  fontSize='medium' />
    )
}

export default CareerSuccessSvgIcon