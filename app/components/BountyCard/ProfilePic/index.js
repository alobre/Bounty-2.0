import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';


const ProfilePic = ({uri}) =>{
    return(
        <View style={styles.profilePicParent}>
            <Image
                style={styles.profilePic}
                source={{
                uri: uri,
                }}
                />
        </View>
    )
} 
export default ProfilePic;
