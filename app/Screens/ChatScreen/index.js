import React, {useCallback, useState, useEffect} from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import styles from './styles'
import moment from 'moment'
import ChatScreenHeader from './ChatScreenHeader'
import Messages from './Messages'

const ChatScreen = ({navigation, route}) => {
    //This will be fetched by conversation_id
    const chatMessages = [
        {
            dateTime: '2022-03-08T20:28:39Z',
            msg: 'Wo wohnst du genau?',
            author_id: '213zg4trh7',
        },
        {
            dateTime: '2022-03-07T20:29:39Z',
            msg: 'Ich könnte dir helfen',
            author_id: '213zg4trh7'
        },
        {
            dateTime: '2022-03-08T20:20:39Z',
            msg: 'Super! kannst du es heute noch erledigen?',
            author_id: '123456'
        },
        {
            dateTime: '2022-03-08T20:22:39Z',
            msg: 'Habe erst um 15:00 Zeit aber um 16:00 könnte ich bei dir sein.',
            author_id: '213zg4trh7'
        },
        {
            dateTime: '2022-04-09T20:29:39Z',
            msg: 'Ok',
            author_id: '213zg4trh7'
        },
    ]
    const data = route.params.data;

    const { width, height } = Dimensions.get('window');
    const headerHeight = height * 0.075
    const chatScreenHeight = height - headerHeight

    useEffect(() => {
        navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" }});
        return () => navigation.getParent()?.setOptions({ tabBarStyle: undefined });
      }, [navigation]);

    return(
        <View>
            {/* Header */}
            <ChatScreenHeader
            profilePic={data.user.profilePic}
            username={data.user.username}
            uid={data.user.uid}
            navigation={navigation}
            height={headerHeight}
            />
            
            {/* Messages */} 
            <View style={styles.messageBody}>
                <Messages chatMessages={chatMessages} height={chatScreenHeight}/>
            </View>
        </View>
    )
}
export default ChatScreen