import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Bounty = ({bounty, currency, size}) =>{
    return(
        <View>
            <Text style={[styles.bountyText, {fontSize: size}]}>{currency} {bounty}</Text>
        </View>
    )
}
export default Bounty;