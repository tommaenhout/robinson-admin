import React from 'react';
import { TextInput, Text, View } from 'react-native';

const CustomInput = ({input}) => {
  return (
    <View>
    <View className="flex justify-center relative bg-white">
          <TextInput
              name={input.name}
              className='rounded-md h-8 w-full px-2'
              placeholder={input.placeholder}
              value={input.value}
              onChangeText={(value) => (input.onChange(input.name, value))}/>
            </View>
{input.error && <Text className="px-2 text-xs text-red-700">{input.error}</Text>}
</View>
        
  );
};

export default CustomInput;