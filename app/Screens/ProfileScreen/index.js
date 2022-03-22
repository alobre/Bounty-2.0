import React, {useEffect, useState} from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './styles'
import {useSelector, useDispatch} from 'react-redux'
import ProfilePic from 'app/components/BountyCard/ProfilePic'
import avg from 'app/global/functions/avg'

const ProfileScreen = ({navigation, route}) =>{
    const [user, setUser] = useState(route.params?.user)
    const [userBounties, setUserBounties] = useState(''); //fetch users bounties
    const {current} = useSelector(state => state.RBSheetReducer)
    // if profile is opened during CommentSection open
    useEffect(()=>{
        if(current) current.current.close() 
        return () =>{
            if(current) current.current.open()  
        }
    },[])

    useEffect(()=>{
        if(user.username == undefined || user.profilePic == undefined || user.rating == undefined)
        {
            //fetchdata by user.uid
        }
    },[user])
    return(
        <ScrollView>
            <View style={styles.profilePicParent}>
                <ProfilePic uri={user?.profilePic} size={100}/>
                <Text style={styles.username}>{user.username}</Text>
                <View style={styles.ratingWrapper}>
                    <Text style={styles.rating}>{avg(user.rating)}</Text> 
                    <Text style={styles.ratingLength}>({user.rating.length})</Text>
                </View>
            </View>
        </ScrollView>
    )
}
export default ProfileScreen