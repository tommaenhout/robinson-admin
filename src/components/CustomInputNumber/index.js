import React from 'react';
import { TextInput } from 'react-native';
import { Text } from 'react-native';

const CustomInputNumber = ({input}) => {
  return (
    <>
      {input.label && <Text>{input.label}</Text>}
          <TextInput
              name={input.name}
              className='border-2 border-gray-100 rounded-md h-10 w-full px-2'
              placeholder={input.placeholder}
              value={input.value}
              keyboardType="numeric"
              onChangeText={(value) => (input.onChange(input.name, value))}/>
    </>
    )
};

export default CustomInputNumber;