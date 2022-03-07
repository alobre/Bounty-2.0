import React from 'react'
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import styles from './styles'
import ProfilePic from 'app/components/BountyCard/ProfilePic'
import moment from 'moment'

const data = [
    {
        conversation_id: '1',
        user: {
            profilePic: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            username: 'Mark Mayer',
            uid: '213zg4trh7',
            rating: [5,3,5,5,5,4,5]
        },
        lastMessage: {
            message: "Gut, bin am Weg!",
            time: '15:22',
            date: '4.03.2022'
        },
    },
    {
        conversation_id: '2',
        user: {
            profilePic: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            username: 'Mark Mayer',
            uid: '213zg4trh7',
            rating: [5,3,5,5,5,4,5]
        },
        lastMessage: {
            message: "Gut, bin am Weg!",
            time: '15:22',
            date: '12.03.2022'
        },
    },
    {
        conversation_id: '3',
        user: {
            profilePic: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            username: 'Mark Mayer',
            uid: '213zg4trh7',
            rating: [5,3,5,5,5,4,5]
        },
        lastMessage: {
            message: "Gut, bin am Weg!",
            time: '15:22',
            date: '12.03.2022'
        },
    },
    {
        conversation_id: '4',
        user: {
            profilePic: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            username: 'Mark Mayer',
            uid: '213zg4trh7',
            rating: [5,3,5,5,5,4,5]
        },
        lastMessage: {
            message: "Gut, bin am Weg!",
            time: '15:22',
            date: '12.03.2022'
        },
    },
    {
        conversation_id: '5',
        user: {
            profilePic: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            username: 'Mark Mayer',
            uid: '213zg4trh7',
            rating: [5,3,5,5,5,4,5]
        },
        lastMessage: {
            message: "Gut, bin am Weg!",
            time: '15:22',
            date: '12.03.2022'
        },
    },
    {
        conversation_id: '6',
        user: {
            profilePic: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            username: 'Mark Mayer',
            uid: '213zg4trh7',
            rating: [5,3,5,5,5,4,5]
        },
        lastMessage: {
            message: "Gut, bin am Weg!",
            time: '15:22',
            date: '12.03.2022'
        },
    },
    {
        conversation_id: '7',
        user: {
            profilePic: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            username: 'Mark Mayer',
            uid: '213zg4trh7',
            rating: [5,3,5,5,5,4,5]
        },
        lastMessage: {
            message: "Gut, bin am Weg!",
            time: '15:22',
            date: '12.03.2022'
        },
    },
    {
        conversation_id: '8',
        user: {
            profilePic: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            username: 'Mark Mayer',
            uid: '213zg4trh7',
            rating: [5,3,5,5,5,4,5]
        },
        lastMessage: {
            message: "Gut, bin am Weg!",
            time: '15:22',
            date: '12.03.2022'
        },
    },
    {
        conversation_id: '9',
        user: {
            profilePic: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            username: 'Mark Mayer',
            uid: '213zg4trh7',
            rating: [5,3,5,5,5,4,5]
        },
        lastMessage: {
            message: "Gut, bin am Weg!",
            time: '15:22',
            date: '12.03.2022'
        },
    },
    {
        conversation_id: '10',
        user: {
            profilePic: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            username: 'Mark Mayer',
            uid: '213zg4trh7',
            rating: [5,3,5,5,5,4,5]
        },
        lastMessage: {
            message: "Gut, bin am Weg!",
            time: '15:22',
            date: '12.03.2022'
        },
    },
    {
        conversation_id: '11',
        user: {
            profilePic: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            username: 'Mark Mayer',
            uid: '213zg4trh7',
            rating: [5,3,5,5,5,4,5]
        },
        lastMessage: {
            message: "Gut, bin am Weg!",
            time: '15:22',
            date: '12.03.2022'
        },
    },
    {
        conversation_id: '12',
        user: {
            profilePic: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            username: 'Mark Mayer',
            uid: '213zg4trh7',
            rating: [5,3,5,5,5,4,5]
        },
        lastMessage: {
            message: "Gut, bin am Weg!",
            time: '15:22',
            date: '12.03.2022'
        },
    },
    {
        conversation_id: '13',
        user: {
            profilePic: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            username: 'Mark Mayer',
            uid: '213zg4trh7',
            rating: [5,3,5,5,5,4,5]
        },
        lastMessage: {
            message: "Gut, bin am Weg!",
            time: '15:22',
            date: '12.03.2022'
        },
    },
    {
        conversation_id: '14',
        user: {
            profilePic: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            username: 'Mark Mayer',
            uid: '213zg4trh7',
            rating: [5,3,5,5,5,4,5]
        },
        lastMessage: {
            message: "Gut, bin am Weg!",
            time: '15:22',
            date: '12.03.2022'
        },
    },
    {
        conversation_id: '15',
        user: {
            profilePic: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            username: 'Mark Mayer',
            uid: '213zg4trh7',
            rating: [5,3,5,5,5,4,5]
        },
        lastMessage: {
            message: "Gut, bin am Weg!",
            time: '15:22',
            date: '12.03.2022'
        },
    },
    {
        conversation_id: '16',
        user: {
            profilePic: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            username: 'Mark Mayer',
            uid: '213zg4trh7',
            rating: [5,3,5,5,5,4,5]
        },
        lastMessage: {
            message: "Gut, bin am Weg!",
            time: '15:22',
            date: '12.03.2022'
        },
    },


]

const ConversationComponent = ({item, navigation}) =>{
    const isOlder = () =>{
        const today = moment(new Date()).format('DD.MM.YYYY');
        return moment(item.lastMessage.date).isBefore(today);
    }
    const openChat = () =>{
        navigation.navigate('ChatScreen', {'data': item})
    }
    return(
    <TouchableOpacity onPress={openChat} style={styles.conversationParent}>
        <View style={styles.profilePicMessageUsernameWrapper}>
            <View style={styles.user}>
                <ProfilePic uri={item.user.profilePic} size={50}/>
            </View>
            <View style={styles.messageUsernameWrapper}>
                <Text style={styles.username}>{item.user.username}</Text>
                <Text style={styles.message}>{item.lastMessage.message}</Text>
            </View>
        </View>
        <View style={styles.time}>
            <Text>
                {isOlder() ? item.lastMessage.date : item.lastMessage.time}
            </Text>
        </View>
    </TouchableOpacity>
    )
}

const MessageScreen = ({navigation}) =>{
    const renderItem = ({ item }) => (
        <ConversationComponent item={item} navigation={navigation} />
      );
    return(
    <SafeAreaView
    style={styles.safeAreaView}
    >
        <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.conversation_id}
        />
    </SafeAreaView>
    )
}
export default MessageScreen;