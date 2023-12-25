import React from 'react'
import { View, Text, Button } from 'react-native'


const StudentListItem = ({student, onModal}) => {
    const {firstName, lastName, language, level} = student
    return (
        <View style={styles.shadow}  className="h-32 flex flex-row items-center mb-1 p-2 rounded-md mt-3 ">
            <View className="w-4/5 flex gap-y-5">
                <Text  style={{fontFamily : "Rubik-Bubbles"}}>{lastName}, {firstName}</Text> 
                <Text>{language} {level}</Text>
            </View>
            <Button title='DEL' onPress={() => onModal(student)}/>
        </View>
    )
}
export default StudentListItem

