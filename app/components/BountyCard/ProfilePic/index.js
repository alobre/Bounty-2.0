import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const ProfilePic = ({uri, size}) =>{
    return(
        <LinearGradient colors={['#2EB3FD', '#00477A']} start={{x: 1, y: 1}} end={{x: 0.1, y: 0.1}} style={[styles.profilePicParent, size && {height: size + 5, width: size + 5}]}>
            <Image
                style={[styles.profilePic, size && {height: size, width: size}]}
                source={{
                uri: uri,
                }}
                />
        </LinearGradient>
    )
} 
export default ProfilePic;
