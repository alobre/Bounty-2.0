import React, { useCallback, useState, setState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import avg from 'app/global/functions/avg';
import ProfilePic from './ProfilePic';
import Tags from './Tags';
import Location from './Location'
import Bounty from './Bounty'
import InteractionSection from './InteractionSection';
import Bookmark from './Bookmark';
import ThreeVerticalDots from './ThreeVerticalDots';

const BountyCard = ({navigation, title, user, description, bounty, currency, image, tags, interactions}) =>{
    const [numOfLines, setNumOfLines] = useState(4);
    const [showMore, setShowMore] = useState(false);
    const [showMoreActive, setShowMoreActive] = useState(false)
    const [descriptonNumOfLines, setDescriptionNumOfLines] = useState(0)

    const onTextLayout = useCallback(e => {
        setShowMore(e.nativeEvent.lines.length > numOfLines);
        setDescriptionNumOfLines(e.nativeEvent.lines.length);
      }, []);
    const showMoreText = () =>{
        setNumOfLines(descriptonNumOfLines);
        setShowMoreActive(true)
    }
    const showLessText = () =>{
        setNumOfLines(4);
        setShowMoreActive(false)
    }
    const openProfile = () =>{
        navigation.navigate('ProfileScreen')
    }

    const [bountyDetails, setBountyDetails] = useState({
        title, user, description, bounty, currency, image, tags, interactions
    })
    return(
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
                    <TouchableOpacity onPress={openProfile}>
                    <   ProfilePic uri='https://bilder.berchtesgadener-land.com/workspace/pixxio/tt.php?w=1600&q=80&dataPath=/pixxiodata/systems/bgl&src=/fileArchiv/tb/TbCqc1wa4Y2wVbKDSf__1535620105_5427100.jpg'/>
                    </TouchableOpacity>
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
               <Text style={styles.description} numberOfLines={numOfLines} onTextLayout={onTextLayout}>{description}</Text>
               {!showMoreActive && showMore && <Text onPress={showMoreText}>Show More</Text>}
               {showMoreActive && <Text onPress={showLessText}>Show Less</Text>}
            </View>
        </View>
        <View>
            <InteractionSection navigation={navigation} bountyDetails={bountyDetails}/>
        </View>
    </View>
    )
}
export default BountyCard;