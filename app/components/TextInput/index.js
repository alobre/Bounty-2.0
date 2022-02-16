import React from 'react'
import { View, TextInput } from 'react-native'
import styles from './styles';

const Input = ({placeholder}) =>{
    return(
        <View style={styles.textInputParent}>
            <TextInput style={styles.textInput} multiline placeholder={placeholder}/>
        </View>
    )
}
export default Input;