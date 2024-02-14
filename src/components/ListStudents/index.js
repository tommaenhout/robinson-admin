import StudentListItem from "./StudentListItem"
import { FlatList, View } from "react-native"


const ListStudents = ({students, onModal}) => {   
    return (
        <View>
           <FlatList
                data={students}
                keyExtractor={(item) => item.id.$oid}
                renderItem={({item}) => <StudentListItem student={item} onModal={onModal}/>}
            /> 
        </View>
    )
}
export default ListStudents