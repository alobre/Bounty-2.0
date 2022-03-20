import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import ProfilePic from 'app/components/BountyCard/ProfilePic';
import avg from 'app/global/functions/avg';
import Icon from 'react-native-vector-icons/Octicons'
import colors from 'app/global/variables/colors'

const Subcomment = ({navigation, username, rating, profilePic, comment, isOP}) =>{
    const openProfile = () =>{
        navigation.navigate('ProfileScreen')
    }
    return(
        <View style={styles.comment}>
            <View style={styles.profileWrapper}>
                <TouchableOpacity onPress={openProfile}>
                    <ProfilePic size={30} uri='https://bilder.berchtesgadener-land.com/workspace/pixxio/tt.php?w=1600&q=80&dataPath=/pixxiodata/systems/bgl&src=/fileArchiv/tb/TbCqc1wa4Y2wVbKDSf__1535620105_5427100.jpg'/>
                </TouchableOpacity>
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
        </View>
    )
}
export default Subcomment;