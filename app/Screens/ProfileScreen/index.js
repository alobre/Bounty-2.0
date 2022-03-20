import React, {useEffect} from 'react'
import { View, Text, BackHandler } from 'react-native'
import styles from './styles'
import {useSelector, useDispatch} from 'react-redux'

const ProfileScreen = ({navigation, route}) =>{
    const {current} = useSelector(state => state.RBSheetReducer)
    useEffect(()=>{
        if(current) current.current.close() 
        return () =>{
            if(current) current.current.open()  
        }
    },[])
    return(
        <View>
            <Text>Test</Text>
        </View>
    )
}
export default ProfileScreen