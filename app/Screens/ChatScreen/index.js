import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './styles'
import moment from 'moment'
import ChatScreenHeader from './ChatScreenHeader'
import Messages from './Messages'

const ChatScreen = ({navigation, route}) => {
    //This will be fetched by conversation_id
    const chatMessages = [
        {
            dateTime: moment.utc().format('DD.MM.YYYY HH:mm:ss'),
            msg: 'Ich könnte dir helfen',
            author_id: '213zg4trh7'
        },
        {
            dateTime: moment.utc().format('DD.MM.YYYY HH:mm:ss'),
            msg: 'Super! kannst du es heute noch erledigen?',
            author_id: '123456'
        },
        {
            dateTime: moment.utc().format('DD.MM.YYYY HH:mm:ss'),
            msg: 'Habe erst um 15:00 Zeit aber um 16:00 könnte ich bei dir sein.',
            author_id: '213zg4trh7'
        },
        {
            dateTime: moment.utc().format('DD.MM.YYYY HH:mm:ss'),
            msg: 'Wo wohnst du genau?',
            author_id: '213zg4trh7',
        },
    ]
    const data = route.params.data;
    console.log({data})
    return(
        <View>
                {/* Header */}
            <ChatScreenHeader profilePic={data.user.profilePic} username={data.user.username} uid={data.user.uid} navigation={navigation}/>
                {/* Messages */}
                
            <View style={styles.messageBody}>
                <Messages chatMessages={chatMessages}/>
            </View>
        </View>
    )
}
export default ChatScreen