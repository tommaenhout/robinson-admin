import React from 'react';
import { TextInput } from 'react-native';

const CustomInput = ({input}) => {
  return (
      
          <TextInput
              name={input.name}
              className='border-2 border-gray-100 rounded-md h-10 w-full px-2'
              placeholder={input.placeholder}
              value={input.value}
              onChangeText={(value) => (input.onChange(input.name, value))}/>
    )
};

export default CustomInput;