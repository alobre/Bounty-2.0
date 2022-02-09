import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import ProfilePic from './ProfilePic';
import Tags from './Tags';
import Location from './Location'
import Bounty from './Bounty'

const BountyCard = ({title, user, description, bounty, currency, image, tags}) =>{
    const avg = (array) => {
        let total = 0;
        array.map(num => total += num);
        const result = total / array.length;
        return result.toFixed(1);
    }
    return(
    <View style={styles.bountyCard}>
        <View>
            <View>
               <Text style={styles.title}>{title}</Text> 
            </View>
            <View style={styles.tagLocationWrapper}>
                <Tags style={styles.tags} tags={tags} />
                <Location style={styles.location} city='Wien' zip='1100'/>
            </View>
            <View style={styles.profileBountyWrapper}>
                <View style={styles.profileWrapper}>
                    <ProfilePic uri='https://i.vimeocdn.com/portrait/58832_300x300.jpg'/>
                    <View style={styles.usernameAndRating}>
                        <Text style={styles.username}>{user.username}</Text>
                        <View style={styles.ratingWrapper}>
                            <Text style={styles.rating}>{avg(user.rating)}</Text> 
                            <Text style={styles.ratingLength}>({user.rating.length})</Text>
                        </View>
                    </View>
                </View>
                <Bounty style={styles.bounty} currency={currency} bounty={bounty} size={24}/>
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