import React from 'react';
import { SvgIcon } from '@mui/material';
import {ReactComponent as clockImg} from './Entrpreneurship.svg';



const EntrepreneurshipSvgIcon = (props:any) => {
    return (
        <SvgIcon component={clockImg}  inheritViewBox  fontSize='medium' />
    )
}

export default EntrepreneurshipSvgIcon