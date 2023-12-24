import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import dummyData from '../../../dummydata-prices.json'
import PricesCollection from '../../components/PricesCollection';
import { useSelector, useDispatch } from 'react-redux';
import { setPrices,setPricesGroup, setPricesIndividual } from '../../features/pricesSlice';
import { useEffect } from 'react';

const pricesArray = dummyData

const PricesScreen = ({navigation, route}) => {
    const prices = useSelector((state) => state.prices.prices)
    const pricesIndividual = useSelector((state) => state.prices.pricesIndividual)
    const pricesGroup = useSelector((state) => state.prices.pricesGroup)
    const dispatch = useDispatch()

    useEffect (() => {
        if (prices.length >  0) {
            dispatch(setPricesIndividual())
            dispatch(setPricesGroup())
        }
    }, [prices])

    useEffect (() => {
        dispatch(setPrices(pricesArray))
    }, [])

    return (
        <ScreenWrapper>
            <PricesCollection prices={pricesIndividual} title={"Individual"} navigation={navigation} route={route} />
            <PricesCollection prices={pricesGroup} title={"Group"} navigation={navigation} route={route} />
        </ScreenWrapper>
    );
    }
export default PricesScreen;