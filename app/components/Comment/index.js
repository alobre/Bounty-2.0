import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import ProfilePic from 'app/components/BountyCard/ProfilePic';
import avg from 'app/global/functions/avg';
import Subcomment from 'app/components/Comment/Subcomment'
import Icon from 'react-native-vector-icons/Octicons'
import colors from 'app/global/variables/colors'

const Comment = ({username, rating, profilePic, comment, subcomment, op_id, isOP}) =>{
    return(
    <View style={styles.comment}>
        <View style={styles.profileWrapper}>
            <ProfilePic size={30} uri='https://bilder.berchtesgadener-land.com/workspace/pixxio/tt.php?w=1600&q=80&dataPath=/pixxiodata/systems/bgl&src=/fileArchiv/tb/TbCqc1wa4Y2wVbKDSf__1535620105_5427100.jpg'/>
            <View style={styles.usernameAndRating}>
                <View style={styles.nameStarWrapper}>
                    <Text style={styles.username}>{username}</Text>
                    { isOP && <Icon style={styles.starIcon} name='star' color={colors.usernameBlue}/> }
                </View>
                
                <View style={styles.ratingWrapper}>
                    <Text style={styles.rating}>{avg(rating)}</Text> 
                    <Text style={styles.ratingLength}>({rating.length})</Text>
                </View>
            </View>
        </View>
        <View style={styles.textParent}>
            <Text style={styles.text}>{comment}</Text>
        </View>
        {
            subcomment && subcomment.map(sc => 
                <Subcomment 
                username={sc.username} 
                rating={sc.rating} 
                profilePic={sc.profilePic} 
                comment={sc.comment} 
                isOP={sc.uid == op_id}
                key={sc.uid + sc.time + sc.date}
                />
            )
        }
    </View>
    )
}
export default Comment;