import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons'

const ReplyInput = ({replyMessage}) =>{
    const [text, setText] = useState('')
    
    return(
        <View style={styles.replyInputParent}>
            <TextInput style={styles.textInput} placeholder='Reply...' onChangeText={ text => {setText(text)}}/>
            <TouchableOpacity style={styles.sendButtonParent} onPress={()=>replyMessage(text)}>
                    <Icon size={20} name='send'/>
            </TouchableOpacity>
        </View>
    )
}
export default ReplyInput;