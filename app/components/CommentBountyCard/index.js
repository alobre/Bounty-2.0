import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import avg from 'app/global/functions/avg';
import ProfilePic from 'app/components/BountyCard/ProfilePic';
import Tags from 'app/components/BountyCard/Tags';
import Location from 'app/components/BountyCard/Location'
import Bounty from 'app/components/BountyCard/Bounty'
import InteractionSection from 'app/components/BountyCard/InteractionSection';
import Bookmark from 'app/components/BountyCard/Bookmark';
import ThreeVerticalDots from 'app/components/BountyCard/ThreeVerticalDots';

const CommentBountyCard = ({title, user, description, bounty, currency, image, tags, interactions}) =>{
    return(
    <ScrollView>
        <View style={styles.bountyCard}>
            <View>
                <View style={styles.titleWrap}>
                <Text style={styles.title} numberOfLines={2}>{title}</Text>
                <View style={styles.upperIcons}>
                    <Bookmark bookmarked={false} size={24}/>
                    <ThreeVerticalDots size={24}/>
                </View>
                </View>
                <View style={styles.tagLocationWrapper}>
                    <Tags style={styles.tags} tags={tags} />
                    <Location style={styles.location} city='Wien' zip='1100'/>
                </View>
                <View style={styles.profileBountyWrapper}>
                    <View style={styles.profileWrapper}>
                        <ProfilePic uri='https://bilder.berchtesgadener-land.com/workspace/pixxio/tt.php?w=1600&q=80&dataPath=/pixxiodata/systems/bgl&src=/fileArchiv/tb/TbCqc1wa4Y2wVbKDSf__1535620105_5427100.jpg'/>
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
        </View>
    </ScrollView>
    )
}
export default CommentBountyCard;