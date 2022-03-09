import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './styles'
import colors from 'app/global/variables/colors'

const Message = ({message, isYourMsg, nextMessageSameAuthor}) =>{
    return(
        <View style={styles.parent}>
            <View style={[
            styles.messageBubble,
            isYourMsg == true ? styles.messageBubbleRight : styles.messageBubbleLeft,
            nextMessageSameAuthor && styles.nextMessageSameAuthor
            ]}>
                <Text style={styles.textMessage}>{message}</Text>
            </View>
        </View>
    )
}
export default Message;