import React, { useEffect } from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import Title from '../../components/Title';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import InputPicker from '../../components/InputPicker';
import CustomButton from '../../components/CustomButton';
import { useState } from 'react';
import { inputTypes } from '../../constants/inputTypes';

const PricesDetailScreen = ({ navigation, route }) => {
    const { price } = route.params
    const {id, isGroup, type, hours_per_week, classes_per_week, duration, price : prices} = price
    const {one_month, three_months, one_month_usd, three_months_usd} = prices
    const {navigate} = navigation   

    const [pricesToEdit, setPricesToEdit] = useState({
        one_month : one_month,
        three_months : three_months,
        one_month_usd : one_month_usd,
        three_months_usd : three_months_usd
    })

    const onChangeHandler = (name, value) => {
        setPricesToEdit({
            ...pricesToEdit,
            [name] : value
        })
    }

    const editPrice = () => {
        const url = `/prices/${id.$oid}`
        console.log("api call with id to edit price")
        navigate("Prices")
    }

    const inputs = [
        { 
            onChange : onChangeHandler,
            value : pricesToEdit.one_month.toString(),
            name : 'one_month',
            type : inputTypes.number,
            placeholder : 'one month',
            label : 'one month'
        },
        { 
            onChange : onChangeHandler,
            value : pricesToEdit.three_months.toString(),
            name : 'three_months',
            type : inputTypes.number,
            placeholder : 'three months',
            label : 'three months'
        },
        {
            onChange : onChangeHandler,
            value : pricesToEdit.one_month_usd.toString(),
            name : 'one_month_usd',
            type : inputTypes.number,
            placeholder : 'one month usd',
            label : 'one month usd'
        },
        {
            onChange : onChangeHandler,
            value : pricesToEdit.three_months_usd.toString(),
            name : 'three_months_usd',
            type : inputTypes.number,
            placeholder : 'three months usd',
            label : 'three months usd'
        }
    ]


    return (
        <ScreenWrapper>
        <View className="grid gap-7">
            <View>
                <Title>{`${type} ${!isGroup ? "indvidual" : "group"}`} </Title>
            </View>
        
            <KeyboardAvoidingView>
                <View className="p-2">
                    {inputs.map((input, index) => (
                        <InputPicker
                            key={index}
                            input = {input}
                        />
                    ))}
                </View>
            </KeyboardAvoidingView>
            <View className="p-2">
                <Text>Price ID: {id.$oid}</Text>
                <Text>Hours per week: {hours_per_week}</Text>
                <Text>Classes per week: {classes_per_week}</Text>
                <Text>Duration: {duration}</Text>
            </View>
        </View>  
        <CustomButton title="Save" onPress={editPrice}/> 
        </ScreenWrapper>
    );
}

export default PricesDetailScreen;
