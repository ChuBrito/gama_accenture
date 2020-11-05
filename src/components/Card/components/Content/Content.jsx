import React from 'react'
import CustomButton from '../../../CustomButton/CustomButton';
import FlyInfos from './components/FlyInfos';

// Falta Finalizar

const Content = () => {
    return (
        <main>
            <ContentAirline>GOL</ContentAirline>
            <FlyInfos />
            <ContentDetails>
                <ContentDetailsText>Por adulto</ContentDetailsText>
                <ContentDetailsText>Taxas e tarifas</ContentDetailsText>
                <ContentDetailsValue>R$ 353,47</ContentDetailsValue>
                <CustomButton></CustomButton>
            </ContentDetails>
        </main>
    )
}

export default Content;