import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from 'app/global/variables/colors'

const Bookmark = ({bookmarked, size = 24}) =>{
    return(
        <View>
            {bookmarked ? <Icon size={size} color={colors.black} name="bookmark"/> : <Icon size={size} color={colors.black} name="bookmark-outline"/>}
        </View>
    )
}
export default Bookmark;