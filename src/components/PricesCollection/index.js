import Title from "../Title"
import { Pressable, View , StyleSheet, Text} from "react-native"


const PricesCollection = ({prices, title, navigation}) => {
    const {navigate} = navigation

    return (
        <View className="mb-4">
            <View className="mb-3">
                 <Title>{title} </Title>
            </View>
           <View style={styles.container}>
            {prices.map((price, index) => (
                <Pressable style={styles.pressable} onPress={() => navigate("Price Edit",{price:price})} key={index} ><Text style={styles.text} key={index}>{price.type}</Text></Pressable>
            ))}
            </View>
        </View>
    )
}

const styles =  StyleSheet.create({
    pressable : {
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 30,
        width: "32%",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "lightgrey",
        borderRadius: 10,
     
    },
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    },
    text : {
        textAlign: "center",
    }
})

export default PricesCollection