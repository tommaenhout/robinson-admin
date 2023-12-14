import React from 'react';
import { View, Text, Modal } from 'react-native';
import CustomButton from '../CustomButton';
import InputPicker from '../InputPicker';


const ModalAddAdmin = ({visible,setModalVisible, inputs, addNewAdmin }) => {  

    return (
        <Modal visible={visible}>
            <View>
                <View>
                    {inputs && inputs.map((input, index) => (
                    <InputPicker
                        key={index}
                        input={input}
                        />
                    ))}
                </View>
                <View>
                    <CustomButton title="Add" onPress={addNewAdmin}/>
                    <CustomButton title="Close" onPress={() => setModalVisible(false)} />
                </View>
            </View>
        </Modal>
    )

}

export default ModalAddAdmin;