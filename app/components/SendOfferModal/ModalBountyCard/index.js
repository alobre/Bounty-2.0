import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import avg from 'app/global/functions/avg';
import ProfilePic from 'app/components/BountyCard/ProfilePic';
import Tags from 'app/components/BountyCard/Tags';
import Location from 'app/components/BountyCard/Location'
import Bounty from 'app/components/BountyCard/Bounty'
import Bookmark from 'app/components/BountyCard/Bookmark';
import ThreeVerticalDots from 'app/components/BountyCard/ThreeVerticalDots';
import Icon from 'react-native-vector-icons/Octicons';
import colors from 'app/global/variables/colors'

const CommentBountyCard = ({title, user, description, bounty, currency, image, tags, interactions}) =>{
    return(
    <ScrollView>
        <View style={styles.bountyCard}>
            <View>
                <View style={styles.titleWrap}>
                <Text style={styles.title} numberOfLines={2}>{title}</Text>
                {/* <View style={styles.upperIcons}>
                    <Bookmark bookmarked={false} size={24}/>
                    <ThreeVerticalDots size={24}/>
                </View> */}
                </View>
                
                <View style={styles.profileBountyWrapper}>
                    <View style={styles.profileWrapper}>
                        <ProfilePic size={30} uri='https://bilder.berchtesgadener-land.com/workspace/pixxio/tt.php?w=1600&q=80&dataPath=/pixxiodata/systems/bgl&src=/fileArchiv/tb/TbCqc1wa4Y2wVbKDSf__1535620105_5427100.jpg'/>
                        <View style={styles.usernameAndRating}>
                            <View>
                                <View style={styles.nameStarWrapper}>
                                    <Text style={styles.username}>{user.username}</Text>
                                    <Icon style={styles.starIcon} name='star' color={colors.usernameBlue}/>
                                </View>
                                <View style={styles.ratingWrapper}>
                                    <Text style={styles.rating}>{avg(user.rating)}</Text> 
                                    <Text style={styles.ratingLength}>({user.rating.length})</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.locationParent}>
                        <Location style={styles.location} city='Wien' zip='1100'/> 
                    </View>
                    {/* <Bounty style={styles.bounty} currency={currency} bounty={bounty} size={24}/> */}
                </View>
                <View>
                <Text style={styles.description}>{description}</Text>
                </View>
            </View>
        </View>
    </ScrollView>
    )
}
export default CommentBountyCard;