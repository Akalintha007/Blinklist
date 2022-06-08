import React from 'react';
import { SvgIcon } from '@mui/material';
import {ReactComponent as clockImg} from './HealthNutrition.svg';



const HealthNutritionSvgIcon = (props:any) => {
    return (
        <SvgIcon component={clockImg}  inheritViewBox  fontSize='medium' />
    )
}

export default HealthNutritionSvgIcon