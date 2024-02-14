import React from 'react';
import CustomButton from '../../components/CustomButton';
import ScreenWrapper from '../../components/ScreenWrapper';
import { prices as pricesToPost } from '../../constants/pricesToPost';
import { students as studentsToPost } from '../../constants/studentsToPost';
import { usePostPricesMutation, usePostStudentsMutation } from '../../app/services/adminServices';
import { Pressable, StyleSheet, Text, View } from 'react-native';



const HomeScreen = ({navigation}) => { 

    const [triggerPostPrices] = usePostPricesMutation();
    const [triggerPostStudents] = usePostStudentsMutation();

    const loadData = () => {
        triggerPostPrices({prices : pricesToPost}).then((res) => {
            console.log(res)
        })
       studentsToPost.forEach(studentObj => {
            const student = JSON.stringify(studentObj)
            triggerPostStudents({student}).then((res) => {
                console.log(res)
            })
            
        })
    }

    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <Pressable style={styles.pressable} onPress={() => navigation.navigate('Admins')}><Text style={styles.text}>Go to Admins</Text></Pressable>
                <Pressable style={styles.pressable} onPress={() => navigation.navigate('Students')}><Text style={styles.text}>Go to Students</Text></Pressable>
            </View>
            <CustomButton title="Post data to API" onPress={loadData} />
        </ScreenWrapper>
    );
    
}

const styles =  StyleSheet.create({
    pressable : {
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 30,
        width: "48%",
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
        marginBottom: 20,
    },
    text : {
        textAlign: "center",
    }
})
export default HomeScreen;