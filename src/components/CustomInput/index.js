import React from 'react';
import { TextInput } from 'react-native';

const CustomInput = ({input}) => {
  return (
        <>  
          <TextInput
              name={input.name}
              className='border-2 border-gray-100 bg-white rounded-md mb-2 h-10 w-full px-2'
              placeholder={input.placeholder}
              value={input.value}
              onChangeText={(value) => (input.onChange(input.name, value))}/>
              {input.error && <Text className="px-2 text-xs text-red-700">{input.error}</Text>}
            </>
    )
};

export default CustomInput;