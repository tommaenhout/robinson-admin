import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import AddButton from '../../components/AddButton'
import * as ImagePicker from 'expo-image-picker';
import { useGetProfileImageQuery, usePostProfileImageMutation } from '../../app/services/adminServices';
import { useSelector } from 'react-redux';

const ImageSelector = ({navigation}) => {


    const [image,setImage] = useState()
    const [triggerPostProfileImage, {isError, error}] = usePostProfileImageMutation()
    const localId = useSelector((state) => state.auth.localId)
    const {data,isSuccess } = useGetProfileImageQuery(localId)

    useEffect(() => {
        if(isSuccess){
            setImage(data?.image)
        }
    }, [isSuccess])
    


    const pickImage = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync()
        if (granted) {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 4],
                quality: 0.3,
                base64: true
            });

            if (!result.canceled) {
                setImage('data:image/jpeg;base64,' + result.assets[0].base64)
            }

        }
    }


    const confirmImage = () => {
       triggerPostProfileImage({localId, image})
       navigation.goBack()
    }
  return (
    <View style={styles.container}>
       <Image
            source={image ? { uri: image } : require("../../../assets/blank-profile-picture-973460_640.webp")}
            style={styles.image}
            resizeMode='cover'


        />
        <View style={styles.buttonContainer}>
            <AddButton title="Take another photo" onPress={pickImage} />
            <AddButton title="Confirm photo" onPress={confirmImage} />
        </View>
       
    </View>
  )
}


export default ImageSelector


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        marginTop:20
    },
    image:{
        width:200,
        height:200,
        borderRadius:200/2,
        marginBottom:20
    },
    text:{
      
    },
    buttonContainer: {
        width:'100%',
        alignItems:'center',
        flex:1,
        gap:4
    }
})
