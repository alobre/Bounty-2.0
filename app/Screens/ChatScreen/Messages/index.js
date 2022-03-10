import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, SafeAreaView, FlatList, Dimensions } from 'react-native'
import styles from './styles'
import Message from './Message'
import mergeSort from 'app/global/functions/sortByDate'
import moment from 'moment'

const Messages = ({chatMessages, height}) =>{
    const isYou = (msg) =>{
        if(msg.author_id == '123456'){
            return true
        }
        else{
            return false
        }
    }
    const [messages, setMessages] = useState(false)
    useEffect(()=>{
        for (let i = 0; i < chatMessages.length; i++) {
            const current = chatMessages[i];
            let next = false;
            if(i < chatMessages.length + 1){
                next = chatMessages[i + 1]
            }
            if(next && current.author_id == next.author_id) chatMessages[i].nextMessageSameAuthor = true
            else chatMessages[i].nextMessageSameAuthor = false
            chatMessages[i].isYou = isYou(chatMessages[i])
        }
        if(!messages) setMessages(mergeSort(chatMessages))
    },[])
    
    const renderItem = ({ item }) => {
        return(
            <Message message={item.msg} isYourMsg={item.isYou} nextMessageSameAuthor={item.nextMessageSameAuthor} />
        )
    }
    return(
        <SafeAreaView style={[styles.messagesParent, {height: height}]} >
            <FlatList
                data={messages && messages}
                renderItem={renderItem}
                keyExtractor={msg => msg.dateTime + msg.msg}
                inverted
            />
        </SafeAreaView>
    )
}
export default Messages;