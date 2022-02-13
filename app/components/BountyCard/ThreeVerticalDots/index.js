import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import colors from 'app/global/variables/colors'

const ThreeVerticalDots = ({active, size = 24}) =>{
    return(
        <View>
            <Icon size={size} color={colors.black} name="dots-three-vertical"/>
        </View>
    )
}
export default ThreeVerticalDots;