import { View, Button } from 'react-native'

const CustomButton = ({title, onPress}) => {
    return (
        <View className="mb-2">
            <Button title={title} onPress={onPress}/>
        </View>
    )
}

export default CustomButton