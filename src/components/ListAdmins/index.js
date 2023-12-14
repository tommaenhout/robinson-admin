import { useEffect } from "react"
import AdminListItem from "./AdminListItem"
import { FlatList, View } from "react-native"
import CustomButton from "../CustomButton"



const ListAdmins = ({admins, onModal}) => {   
    return (
        <View>
            <FlatList
                data={admins}
                keyExtractor={(item) => item.id.$oid}
                renderItem={({ item }) => <AdminListItem admin={item} onModal={onModal} />}
            />
            <View className="pb-3">
                <CustomButton title="Add Admin" onPress={onModal} />
           </View>
    </View>
    )
}
export default ListAdmins