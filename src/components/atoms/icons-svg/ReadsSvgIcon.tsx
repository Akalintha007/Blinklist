import React from 'react';
import { SvgIcon } from '@mui/material';
import {ReactComponent as userImage} from './Vector.svg';



const ReadsSvgIcon = (props:any) => {
    return (
        <SvgIcon component={userImage}  inheritViewBox  fontSize='small' style={{marginTop:'5px'}}/>
    )
}

export default ReadsSvgIcon