import React, { useState } from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import dummyData from '../../../dummydata-prices.json'
import PricesCollection from '../../components/PricesCollection';
import { useEffect } from 'react';

const pricesArray = dummyData

const PricesScreen = ({navigation, route}) => {
    const [pricesIndividual, setPricesIndividual] = useState([])
    const [pricesGroup, setPricesGroup] = useState([])

    useEffect (() => {
        setPrices()
    }, [pricesArray])

    const setPrices = () => {
        const pricesIndividual = pricesArray.filter(price => price.isGroup === false)
        const pricesGroup = pricesArray.filter(price => price.isGroup === true)

        setPricesIndividual(pricesIndividual)
        setPricesGroup(pricesGroup)
    }

    return (
        <ScreenWrapper>
            <PricesCollection prices={pricesIndividual} title={"Individual"} navigation={navigation} route={route} />
            <PricesCollection prices={pricesGroup} title={"Group"} navigation={navigation} route={route} />
        </ScreenWrapper>
    );
    }
export default PricesScreen;