import { CardContent, Typography } from '@material-ui/core';
import React from 'react'
import CustomButton from '../../../CustomButton/CustomButton';
import FlyInfos from './components/FlyInfos';
import {ContentDetails} from "../styles";

// Falta Finalizar

const Content = () => {
    return (
        <CardContent>
            <Typography>GOL</Typography>
            <FlyInfos />
            <ContentDetails>
                <Typography>Por adulto</Typography>
                <Typography>Taxas e tarifas</Typography>
                <Typography>R$ 353,47</Typography>
                <CustomButton></CustomButton>
            </ContentDetails>
        </CardContent>
    )
}

export default Content;