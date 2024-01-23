import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';


const CustomInputPassword = ({input}) => { 
    const [show, setShow] = useState(false);
    console.log(input.value)
    return (
        <View>
          <View className="flex justify-center relative bg-white">
            <TextInput
                className='rounded-md h-8 w-full px-2'
                placeholder={input.placeholder}
                secureTextEntry={!show}
                value={input.value}
                onChangeText={(value) => (input.onChange(input.name, value))}/>
              <View className="absolute top-0 right-0 h-full mr-4 flex justify-center">
                 <Ionicons onPress={() => setShow(!show)} name={show ? "eye-off" : "eye"} size={24} color="black" />
            </View>
          </View>
          {input.error && <Text className="px-2 text-xs text-red-700">{input.error}</Text>}
      </View>
    )
}

export default CustomInputPassword;