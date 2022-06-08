import React from 'react';
import { SvgIcon } from '@mui/material';
import {ReactComponent as clockImg} from './Productivity.svg';



const ProductivitySvgIcon = (props:any) => {
    return (
        <SvgIcon component={clockImg}  inheritViewBox  fontSize='medium' />
    )
}

export default ProductivitySvgIcon