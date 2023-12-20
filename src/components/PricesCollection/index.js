import CustomButton from "../CustomButton"
import Title from "../Title"
import { View } from "react-native"

const PricesCollection = ({prices, title, navigation}) => {
    const {navigate} = navigation

    return (
        <View className="mb-4">
            <View className="mb-3">
                 <Title>{title} </Title>
            </View>
           
            {prices.map((price, index) => (
                <CustomButton  key={index} title={price.type} onPress={() => navigate("Price Edit",{price:price}) } />
            ))}
        </View>
    )
}

export default PricesCollection