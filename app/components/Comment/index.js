import React, {useState, useCallback, useRef, useEffect} from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import styles from './styles';
import ProfilePic from 'app/components/BountyCard/ProfilePic';
import avg from 'app/global/functions/avg';
import Subcomment from 'app/components/Comment/Subcomment'
import Icon from 'react-native-vector-icons/Octicons'
import colors from 'app/global/variables/colors'
import ReplyInput from './ReplyInput';
import { Transition, Transitioning } from 'react-native-reanimated';

const transition = (
    <Transition.Together>
        <Transition.In type="fade" durationMs={1000}/>
        <Transition.Change />
        <Transition.Out type="fade" durationMs={1000}/>
    </Transition.Together>
) 

const Comment = ({navigation, username, rating, profilePic, comment, subcomment, op_id, isOP, refRBSheet}) =>{
    const auth = true;
    const [openReplyInput, setOpenReplyInput] = useState(false)
    // Implement Reply
    const callback = useCallback((reply) =>{
        setOpenReplyInput(false);
    }, [])
    const ref = useRef();

    const fadeAnim = useRef(new Animated.Value(0)).current
    useEffect(()=>{
        openReplyInput ? 
        Animated.timing(fadeAnim, {
            toValue: 50,
            duration: 200,
            easing: Easing.linear,
            useNativeDriver: false
          }).start()
        :
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 200,
            easing: Easing.linear,
            useNativeDriver: false
          }).start()
    },[openReplyInput])

    const openProfile = () =>{
        navigation.navigate('ProfileScreen')
    }

    return(
    <View style={styles.comment}>
        <View style={styles.profileCommentWrapper}>
            <View>
                <View style={styles.profileWrapper}>
                    <TouchableOpacity onPress={openProfile}>
                        <ProfilePic size={30} uri='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
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
            {
            auth && 
            <TouchableOpacity style={styles.reply} onPress={()=>{setOpenReplyInput(!openReplyInput)}}>
                <Icon name='reply' size={20} color={colors.black}/>
            </TouchableOpacity>
            }
        </View>
        {
            openReplyInput && 
            <Animated.View
            transition={transition}
            ref={ref}
            style={[{height: fadeAnim}]}
            >
                <ReplyInput replyMessage={callback}/>
            </Animated.View>
        }
        {
            subcomment && subcomment.map(sc => 
                <Subcomment 
                navigation={navigation}
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