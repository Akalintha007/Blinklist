import React from 'react';
import { SvgIcon } from '@mui/material';
import {ReactComponent as clockImg} from './SexRelations.svg';



const SexRelationsSvgIcon = (props:any) => {
    return (
        <SvgIcon component={clockImg}  inheritViewBox  fontSize='medium' />
    )
}

export default SexRelationsSvgIcon