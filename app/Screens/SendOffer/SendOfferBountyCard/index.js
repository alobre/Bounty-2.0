import React, {useState, useCallback} from 'react';
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

const SendOfferBountyCard = ({title, user, description, bounty, currency, image, tags, interactions}) =>{
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
   
    return(
    <ScrollView>
        <View style={styles.bountyCard}>
                <View style={styles.titleWrap}>
                <Text style={styles.title} numberOfLines={2}>{title}</Text>
                </View>
                <View style={styles.profileBountyWrapper}>
                    <View style={styles.profileWrapper}>
                        <ProfilePic size={30} uri={user.profilePic}/>
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
                </View>
                <View>
                <Text style={styles.description} numberOfLines={numOfLines} onTextLayout={onTextLayout}>{description}</Text>
                {!showMoreActive && showMore && <Text onPress={showMoreText}>Show More</Text>}
               {showMoreActive && <Text onPress={showLessText}>Show Less</Text>}
                </View>
        </View>
    </ScrollView>
    )
}
export default SendOfferBountyCard;