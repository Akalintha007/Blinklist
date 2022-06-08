import React from 'react';
import { SvgIcon } from '@mui/material';
import {ReactComponent as clockImg} from './Education.svg';



const EducationSvgIcon = (props:any) => {
    return (
        <SvgIcon component={clockImg}  inheritViewBox  fontSize='medium' />
    )
}

export default EducationSvgIcon