import React, {useEffect, useState} from 'react';
import {TextInput, TouchableOpacity, SafeAreaView} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';

const ChatTextInput = ({onSend}) => {
  const placeholder = 'Nachricht';
  // const [textValue, setTextValue] = useState('');
  const [text, onChangeText] = useState('');

  const send = () =>{
    onSend({dateTime: moment.utc().format(), msg: text, author_id: '123456', isYou: true})
    onChangeText('')
  }
  return (
    <SafeAreaView style={styles.parent}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={onChangeText}
        placeholder={placeholder}
        multiline
      />
      <TouchableOpacity onPress={send} style={styles.sendButton}>
        <Icon name="send" size={40} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default ChatTextInput;
