import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import ProfilePic from './ProfilePic';
import Tags from './Tags';
import Location from './Location'
import Bounty from './Bounty'
import InteractionSection from './InteractionSection';
import Bookmark from './Bookmark';
import ThreeVerticalDots from './ThreeVerticalDots';
import Icon from 'react-native-vector-icons/Ionicons';

const BountyCard = ({title, user, description, bounty, currency, image, tags, interactions}) =>{
    const avg = (array) => {
        let total = 0;
        array.map(num => total += num);
        const result = total / array.length;
        return result.toFixed(1);
    }
    return(
    <View style={styles.bountyCard}>
        <View>
            <View style={styles.titleWrap}>
               <Text style={styles.title}>{title}</Text>
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
        <View>
            <InteractionSection interactions={interactions}/>
        </View>
    </View>
    )
}
export default BountyCard;