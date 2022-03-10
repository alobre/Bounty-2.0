import React from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import styles from './styles'
import ProfilePic from 'app/components/BountyCard/ProfilePic'
import ThreeVerticalDots from 'app/components/BountyCard/ThreeVerticalDots'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from 'app/global/variables/colors'

const ChatScreenHeader = ({profilePic, username, uid, navigation, height }) => {
    const navigateBack = () =>{
        navigation.navigate('MessageScreen')
    }
    return(
        <View style={[styles.chatScreenHeaderParent, {height: height}]}>
            <View style={styles.profilePicUsernameWrapper}>
                <TouchableOpacity onPress={navigateBack}>
                    <Icon name='arrow-back' size={30} color={colors.black}/>
                </TouchableOpacity>
                <View>
                    <ProfilePic uri={profilePic} size={40}/>
                </View>
                <View style={styles.usernameParent}>
                    <Text style={styles.username}>{username}</Text>
                </View>
            </View>
            <View style={styles.threeVerticalDots}>
                <ThreeVerticalDots/>
            </View>
        </View>
    )
}
export default ChatScreenHeader;