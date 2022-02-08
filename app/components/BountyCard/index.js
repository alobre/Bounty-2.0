import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import ProfilePic from './ProfilePic';

const BountyCard = ({title, user, description, bounty, image}) =>{
    return(
    <View style={styles.bountyCard}>
        <View>
            <View>
               <Text style={styles.title}>{title}</Text> 
            </View>
            <View>
                <ProfilePic uri='https://i.vimeocdn.com/portrait/58832_300x300.jpg'/>
                <Text style={styles.username}>{user.username}</Text>
                <Text style={styles.rating}>{user.rating}</Text> 
            </View>
            <View>
               <Text style={styles.description}>{description}</Text> 
            </View>
        </View>
        <View>
            {/* InteractionSection */}
        </View>
    </View>
    )
}
export default BountyCard;