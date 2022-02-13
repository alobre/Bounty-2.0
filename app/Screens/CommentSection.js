import React, {useState} from 'react';
import { View, Text } from 'react-native';
import CommentBountyCard from 'app/components/CommentBountyCard';
import Comment from 'app/components/Comment';

const CommentSection = ({navigation, route}) =>{
    const [bd, setBountyDetails] = useState(route.params.bountyDetails)
    return(
        <View>
            <CommentBountyCard title={bd.title} user={bd.user} description={bd.description} bounty={bd.bounty} currency={bd.currency} image={bd.image} tags={bd.tags} interactions={bd.interactions}/>
            {bd.interactions.map(user => <Comment key={user.username + Date.now()} username={user.username} rating={user.rating} profilePic={user.profilePic} comment={user.comment} />)}
        </View>
    )
}
export default CommentSection;