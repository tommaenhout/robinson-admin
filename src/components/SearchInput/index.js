import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchInput = ({input}) => { 
    return (
        <View>
        <View className="flex justify-center relative">
          <TextInput
              className='border-2 border-gray-100 rounded-md h-10 w-full px-2'
              placeholder='Search'
              value={input.value}
              onChangeText={input.onChange}/>
            <View className="absolute top-0 right-0 h-full mr-4 flex justify-center">
              <AntDesign  name="search1" size={24} color="#6B7280" />  
          </View>
        </View>
        <Text className="px-2 text-xs text-red-700">{input.error}</Text>
      </View>
    )
}

export default SearchInput;