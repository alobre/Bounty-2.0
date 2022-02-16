import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CommentBountyCard from 'app/components/CommentBountyCard';
import Comment from 'app/components/Comment';
import Input from 'app/components/TextInput';
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles';

const CommentSection = ({navigation, route}) =>{
    const [bd, setBountyDetails] = useState(route.params.bountyDetails)
    const [placeholderText, setPlaceholderText] = useState('Kommentieren...')
    return(
        <View>
            <CommentBountyCard title={bd.title} user={bd.user} description={bd.description} bounty={bd.bounty} currency={bd.currency} image={bd.image} tags={bd.tags} interactions={bd.interactions}/>
            <View style={styles.textInputButtonWrap}>
                <Input placeholder={placeholderText}/>
                <TouchableOpacity style={styles.sendButtonParent}>
                    <Icon size={30} name='send'/>
                </TouchableOpacity>
            </View>
            {bd.interactions.map(user => <Comment key={user.username + Date.now()} username={user.username} rating={user.rating} profilePic={user.profilePic} comment={user.comment} />)}
        </View>
    )
}
export default CommentSection;