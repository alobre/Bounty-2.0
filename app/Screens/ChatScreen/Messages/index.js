import React, { useEffect, useState, useCallback } from 'react'
import { View, Text, ScrollView, SafeAreaView, FlatList, Dimensions } from 'react-native'
import styles from './styles'
import Message from './Message'
import mergeSort from 'app/global/functions/sortByDate'
import ChatTextInput from './ChatTextInput'
import { useKeyboard } from 'app/global/hooks/useKeyboard'

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
    const [detailsAdded, setDetailsAdded] = useState(false)
    const addMessageDetails = (messages) =>{
        // next = next from array but the list gets inverted so technically next = previous
        for (let i = messages.length - 1; i > 0; i--) {
            const current = messages[i];
            let next = false;
            if(i < messages.length){
                next = messages[i - 1]
            }
            if(next && current.author_id == next.author_id) messages[i].previousMessageSameAuthor = true
            else messages[i].previousMessageSameAuthor = false
            messages[i].isYou = isYou(messages[i])
        }
        return messages;
    }
    useEffect(()=>{
        mergeSort(chatMessages, (sortedMessages) =>{
            setMessages(addMessageDetails(sortedMessages));
            setDetailsAdded(true)
        })
    },[])

    const sendMessageCallback = (message) => {
        setMessages([message, ...messages])
    }

    const keyboardHeight = useKeyboard();

    const renderItem = ({ item }) => {
        return(
            <Message message={item.msg} isYourMsg={item.isYou} previousMessageSameAuthor={item.previousMessageSameAuthor} />
        )
    }
    return(
        <SafeAreaView style={[styles.messagesParent, {height: height - keyboardHeight}]} >
            <FlatList
                data={(messages && detailsAdded) && messages}
                renderItem={renderItem}
                keyExtractor={msg => msg.dateTime + msg.msg}
                inverted
                style={styles.flatList}
            />
            <View style={styles.chatTextInputParent}>
                <ChatTextInput onSend={sendMessageCallback}/>
            </View>
        </SafeAreaView>
    )
}
export default Messages;