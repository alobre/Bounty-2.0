import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import ProfilePic from 'app/components/BountyCard/ProfilePic'
import avg from 'app/global/functions/avg';
import Bounty from 'app/components/BountyCard/Bounty'

const UserData = ({user, navigation, size, bounty, currency, fontSize}) => {
    const openProfile = () =>{
        navigation.navigate('ProfileScreen', {user})
    }
    return(
        <View style={styles.profileBountyWrapper}>
        <View style={styles.profileWrapper}>
            <TouchableOpacity onPress={openProfile}>
            <ProfilePic size={size} uri={user.profilePic}/>
            </TouchableOpacity>
            <View style={styles.usernameAndRating}>
                <Text style={[styles.username, {fontSize: fontSize}]}>{user.username}</Text>
                <View style={styles.ratingWrapper}>
                    <Text style={styles.rating}>{avg(user.rating)}</Text> 
                    <Text style={styles.ratingLength}>({user.rating.length})</Text>
                </View>
            </View>
            </View>
            {
                (bounty && currency) && 
                <Bounty style={styles.bounty} currency={currency} bounty={bounty} size={24}/>
            } 
        
        </View>
    )
}
export default UserData;