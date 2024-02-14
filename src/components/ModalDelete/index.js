import {Modal,View,Text,Button } from "react-native"
import Title from "../Title"
import CustomButton from "../CustomButton"


const ModalDelete = ({student,visible,setModalVisible,onDelete}) =>{

    const { firstName, lastName, language, level, id } = student


    return  <Modal
                visible={visible}>
                <View className="h-screen flex justify-end">
                        <View className="grow flex justify-center gap-y-4">
                            <Title>Are you sure you want to delete this student?</Title>
                            <View className="mx-auto gap-y-4 flex items-center justify-center">
                                <Text>{firstName} {lastName}</Text>
                                <Text>{id.$oid}</Text>
                                <Text>{language} {level}</Text>
                            </View>
                           
                        </View>
                        <View>
                            <CustomButton title="Confirm" onPress={() => onDelete (id.$oid)} />
                            <CustomButton title="Close" onPress={()=> setModalVisible(false)}/>
                        </View>
                </View>
            </Modal>
}

export default ModalDelete