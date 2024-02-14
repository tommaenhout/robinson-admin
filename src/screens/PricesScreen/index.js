import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import PricesCollection from '../../components/PricesCollection';
import { useSelector, useDispatch } from 'react-redux';
import { setPrices,setPricesGroup, setPricesIndividual } from '../../features/pricesSlice';
import { useEffect } from 'react';
import { useGetPricesQuery } from '../../app/services/adminServices';


const STATUSFULFILLED = "fulfilled"

const PricesScreen = ({navigation, route}) => {
    const prices = useSelector((state) => state.prices.prices)
    const pricesIndividual = useSelector((state) => state.prices.pricesIndividual)
    const pricesGroup = useSelector((state) => state.prices.pricesGroup)
    const dispatch = useDispatch()
    const {data, status} = useGetPricesQuery()


    useEffect (() => {

        if (prices?.pro) {
            dispatch(setPricesIndividual())
            dispatch(setPricesGroup())
        }
    }, [prices])

    useEffect (() => {
        if (status === STATUSFULFILLED) {
            dispatch(setPrices(data))
        }
    }, [data])  



 

    return (
        <ScreenWrapper>
            <PricesCollection prices={pricesIndividual} title={"Individual"} navigation={navigation} route={route} />
            <PricesCollection prices={pricesGroup} title={"Group"} navigation={navigation} route={route} />
        </ScreenWrapper>
    );
    }
export default PricesScreen;