import AdminListItem from "./AdminListItem"
import { FlatList } from "react-native"

import { useSelector } from "react-redux"



const ListAdmins = ({onModal}) => { 
    const admins = useSelector((state) => state.admins.filteredAdmins)  
    return (
       
        <>
            <FlatList
                data={admins}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <AdminListItem admin={item} onModal={onModal} />}
            />
        </>

    )
}
export default ListAdmins