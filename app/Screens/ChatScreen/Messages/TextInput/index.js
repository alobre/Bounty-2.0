import React, {useEffect, useState} from 'react';
import {TextInput, TouchableOpacity, SafeAreaView} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ChatTextInput = () => {
  const placeholder = 'Nachricht';
  const [text, onChangeText] = useState('');

  return (
    <SafeAreaView style={styles.parent}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
      <TouchableOpacity style={styles.sendButton}>
        <Icon name="send" size={40} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default ChatTextInput;
