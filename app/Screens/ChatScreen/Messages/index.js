import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, SafeAreaView, FlatList } from 'react-native'
import styles from './styles'
import Message from './Message'

const Messages = ({chatMessages}) =>{
    const isYou = (msg) =>{
        if(msg.author_id == '123456'){
            return true
        }
        else{
            return false
        }
    }
    const [chatReady, setChatReady] = useState(false)
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
        setChatReady(true)
    },[])
    
    const renderItem = ({ item }) => {
        return(
            <Message message={item.msg} isYourMsg={item.isYou} nextMessageSameAuthor={item.nextMessageSameAuthor} />
        )
    }
    return(
        // <ScrollView style={styles.messagesParent}>
        //     {
        //         chatMessages.map(msg =>{
        //             return <Message message={msg} isYourMsg={isYou(msg)} nextMessageSameAuthor={msg.nextMessageSameAuthor} key={msg.dateTime+msg.msg}/>
        //         })
        //     }
        // </ScrollView>
        <SafeAreaView style={styles.messagesParent} >
            <FlatList
                data={chatReady && chatMessages}
                renderItem={renderItem}
                keyExtractor={msg => msg.dateTime + msg.msg}
                inverted
            />
        </SafeAreaView>
    )
}
export default Messages;