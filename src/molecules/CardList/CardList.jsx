import React from 'react'
import Card from '../../components/Card/Card'
import {CardListContainer} from './styles';

const CardList = () => {
    return (
        <CardListContainer>
            <Card />
            <Card />
        </CardListContainer>
    )
}

export default CardList;