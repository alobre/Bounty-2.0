import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import styles from './styles';
import colors from '../../../global/variables/colors';

const Location = ({zip, city}) =>{
    return(
        city ? 
        (
            <View style={styles.locationParent}>
                <Icon size={20} name="location-on" color={colors.usernameBlue}/>
                {zip && (<Text style={styles.zip}>{zip} </Text>)}
                <Text style={styles.city}>{city}</Text>
            </View>
        )
        :
        (
            <View>
                <Icon2 name="globe"/>
                
            </View>
        )
    )
}
export default Location;