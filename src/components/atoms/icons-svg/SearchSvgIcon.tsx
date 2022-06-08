import React from 'react';
import { SvgIcon } from '@mui/material';
import {ReactComponent as userImage} from './searchicon.svg';



const SearchSvgIcon = (props:any) => {
    return (
        <SvgIcon component={userImage}  inheritViewBox  fontSize='large' style={{}}/>
    )
}

export default SearchSvgIcon