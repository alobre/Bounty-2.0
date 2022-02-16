import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import ProfilePic from 'app/components/BountyCard/ProfilePic';
import avg from 'app/global/functions/avg';

const Comment = ({username, rating, profilePic, comment}) =>{
    return(
    <View style={styles.comment}>
        <View style={styles.profileWrapper}>
            <ProfilePic size={30} uri='https://bilder.berchtesgadener-land.com/workspace/pixxio/tt.php?w=1600&q=80&dataPath=/pixxiodata/systems/bgl&src=/fileArchiv/tb/TbCqc1wa4Y2wVbKDSf__1535620105_5427100.jpg'/>
            <View style={styles.usernameAndRating}>
                <Text style={styles.username}>{username}</Text>
                <View style={styles.ratingWrapper}>
                    <Text style={styles.rating}>{avg(rating)}</Text> 
                    <Text style={styles.ratingLength}>({rating.length})</Text>
                </View>
            </View>
        </View>
        <View style={styles.textParent}>
            <Text style={styles.text}>{comment}</Text>
        </View>
    </View>
    )
}
export default Comment;