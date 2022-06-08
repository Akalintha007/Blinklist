import React from 'react';
import { SvgIcon } from '@mui/material';
import {ReactComponent as clockImg} from './CommunicationSkills.svg';



const CommunicationSkillsSvgIcon = (props:any) => {
    return (
        <SvgIcon component={clockImg}  inheritViewBox  fontSize='medium' />
    )
}

export default CommunicationSkillsSvgIcon