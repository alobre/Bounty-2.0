import React from 'react'
import { View, Text, ScrollView } from 'react-native'
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
    for (let i = 0; i < chatMessages.length; i++) {
        const current = chatMessages[i];
        let next = false;
        if(i < chatMessages.length + 1){
            next = chatMessages[i + 1]
        }
        if(next && current.author_id == next.author_id) chatMessages[i].nextMessageSameAuthor = true
        else chatMessages[i].nextMessageSameAuthor = false
    }
    return(
        <ScrollView style={styles.messagesParent}>
            {
                chatMessages.map(msg =>{
                    return <Message message={msg} isYourMsg={isYou(msg)} nextMessageSameAuthor={msg.nextMessageSameAuthor} key={msg.dateTime+msg.msg}/>
                })
                // ()=>{for (let i = 0; i < chatMessage.length; i++) {
                //     return <Message chatMessage={chatMessage[i]}/>
                // }
                // }
            }
            {/* <Message chatMessage={chatMessages[1]}/> */}
        </ScrollView>
    )
}
export default Messages;