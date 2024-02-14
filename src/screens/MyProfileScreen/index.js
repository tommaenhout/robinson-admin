import { useGetProfileImageQuery } from "../../app/services/adminServices";
import AddButton from "../../components/AddButton";
import { Image, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";


const MyProfileScreen = ({navigation}) => { 
    const localId = useSelector((state) => state.auth.localId)
    const {data} = useGetProfileImageQuery(localId)


    return (
        <View style={styles.container}>
            <Image
                source={data ? {uri:data.image} : require("../../../assets/blank-profile-picture-973460_640.webp")}
                resizeMode='cover'
                style={styles.image}
            />
            <AddButton title={"Add profile picture"} onPress={()=> navigation.navigate("ImageSelector")}/>
        </View>
        )
}
export default MyProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
    image : {
        width: 200,
        height: 200,
        borderRadius: 200/2,
        marginBottom: 20
    }
 
})